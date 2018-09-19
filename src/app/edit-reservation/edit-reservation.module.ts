import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditReservationRoutingModule } from './edit-reservation-routing.module';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';
import {
  MatGridListModule,
  MatButtonModule,
  MatCardModule
} from "../../../node_modules/@angular/material";

@NgModule({
  imports: [
    CommonModule,
    EditReservationRoutingModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [EditReservationComponent]
})
export class EditReservationModule {}
