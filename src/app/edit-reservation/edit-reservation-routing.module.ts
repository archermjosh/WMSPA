import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditReservationComponent } from './edit-reservation/edit-reservation.component';

const routes: Routes = [
  {
    path: '',
    component: EditReservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditReservationRoutingModule { }
