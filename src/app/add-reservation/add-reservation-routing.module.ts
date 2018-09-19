import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddReservationComponent } from './add-reservation/add-reservation.component';

const routes: Routes = [
  {
    path: '',
    component: AddReservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddReservationRoutingModule { }
