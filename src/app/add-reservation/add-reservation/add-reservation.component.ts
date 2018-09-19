import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective } from '@angular/forms';

import { Reservation } from '../../shared/models/reservation';
import { ReservationService } from '../../shared/services/reservation.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {
  @ViewChild(FormGroupDirective) myForm;

  private readonly _reservationService: ReservationService;
  private message: string;
  private reservations: Reservation[];

  reservationForm = new FormGroup({
    partyName: new FormControl(''),
    numberOfPeople:  new FormControl(''),
    date:  new FormControl(new Date()),
    time:  new FormControl('')
  });

  constructor(reservationService: ReservationService) {
    this._reservationService = reservationService;
    this._reservationService.getReservations().subscribe(x => this.reservations = x);
  }

  ngOnInit() {
  }

  onSubmit() {
    const reservationToAdd = <Reservation> this.reservationForm.value;

    if (this.dateValid(reservationToAdd) === true) {
      this._reservationService.addReservation(reservationToAdd);
    }
  }

  private dateValid(reservationToAdd: Reservation): boolean {
    let valid = false;
    const date = new Date(reservationToAdd.date);
    const today = new Date();

    if (date >= today) {
      let dateAlreadyTaken = false;
      this.reservations.forEach(reservation => {
        console.log(date);
        console.log(new Date(reservation.date));
        if (date.getTime() === new Date(reservation.date).getTime()) {
          dateAlreadyTaken = true;
        }
      });
      if (dateAlreadyTaken) {
        this.reservationForm.controls['date'].setErrors({'Invalid date': true});
        this.message = `Invalid date: ${date} is already been reserved.`;
        valid = false;
      } else {
        this.reservationForm.reset();
        this.myForm.resetForm();
        this.message = 'Reservation Completed!';
        valid = true;
      }
    } else {
      this.reservationForm.controls['date'].setErrors({'Invalid date': true});
      this.message = `Invalid date: cannot be before ${today}`;
      valid = false;
    }

    return valid;
  }
}
