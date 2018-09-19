import { Component, OnInit, Input } from '@angular/core';
import { ReservationService } from '../../shared/services/reservation.service';
import { Reservation } from '../../shared/models/reservation';

@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.css']
})
export class EditReservationComponent implements OnInit {
  private reservations: Reservation[];
  private readonly _reservationService: ReservationService;

  constructor(reservationService: ReservationService) {
    this._reservationService = reservationService;
   }

  ngOnInit() {
    this._reservationService.getReservations().subscribe(x => this.reservations = this.sortReservationsByDate(x));
  }

  arrived(reservation: Reservation) {
    this._reservationService.completeReservation(reservation);
  }

  cancel(reservation: Reservation) {
    this._reservationService.cancelReservation(reservation);
    console.log(reservation.time);
  }

  private sortReservationsByDate(reservationsToSort: Reservation[]): Reservation[] {
    reservationsToSort = reservationsToSort.slice(0);
    reservationsToSort.sort((leftside, rightside): number => {
      if (leftside.date < rightside.date) {
        return -1;
      } else if (leftside.date > rightside.date) {
         return 1;
      }
      return 0;
    });

    return reservationsToSort;
  }
}
