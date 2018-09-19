import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations = new BehaviorSubject<Reservation[]>([]);

  constructor() { }

  addReservation(reservation: Reservation) {
    const currentReservations = this.reservations.getValue();
    reservation.completed = false;
    currentReservations.push(reservation);
    this.reservations.next(currentReservations);
  }

  getReservations(): BehaviorSubject<Reservation[]> {
    return this.reservations;
  }

  cancelReservation(reservation: Reservation) {
    let currentReservations = this.reservations.getValue();
    currentReservations = currentReservations.filter(x => x !== reservation);
    this.reservations.next(currentReservations);
  }

  completeReservation(reservation: Reservation) {
    const currentReservations = this.reservations.getValue();
    reservation.completed = true;
    this.reservations.next(currentReservations);
  }
}
