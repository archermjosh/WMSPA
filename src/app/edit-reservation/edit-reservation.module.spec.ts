import { EditReservationModule } from './edit-reservation.module';

describe('EditReservationModule', () => {
  let editReservationModule: EditReservationModule;

  beforeEach(() => {
    editReservationModule = new EditReservationModule();
  });

  it('should create an instance', () => {
    expect(editReservationModule).toBeTruthy();
  });
});
