import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCheckboxModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule
} from '@angular/material';

import { ReservationService } from './shared/services/reservation.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [],
  providers: [ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
