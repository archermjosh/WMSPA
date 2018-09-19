import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AddReservationRoutingModule } from './add-reservation-routing.module';
import { AddReservationComponent } from './add-reservation/add-reservation.component';

import { MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AddReservationRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  declarations: [AddReservationComponent]
})
export class AddReservationModule { }
