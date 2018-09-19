import { Time } from '../../../../node_modules/@angular/common';

export class Reservation {
  partyName: string;
  numberOfPeople: number;
  date: Date;
  time: Time;
  completed: boolean;
}
