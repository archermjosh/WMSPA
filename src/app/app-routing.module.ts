import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './edit-reservation/edit-reservation.module#EditReservationModule'
  },
  {
    path: 'add-reservation',
    loadChildren: './add-reservation/add-reservation.module#AddReservationModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
