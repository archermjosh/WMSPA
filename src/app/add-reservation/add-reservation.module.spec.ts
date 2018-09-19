import { AddReservationModule } from './add-reservation.module';

describe('AddReservationModule', () => {
  let addReservationModule: AddReservationModule;

  beforeEach(() => {
    addReservationModule = new AddReservationModule();
  });

  it('should create an instance', () => {
    expect(addReservationModule).toBeTruthy();
  });
});
