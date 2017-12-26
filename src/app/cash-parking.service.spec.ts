import { TestBed, inject } from '@angular/core/testing';

import { CashParkingService } from './cash-parking.service';

describe('CashParkingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CashParkingService]
    });
  });

  it('should be created', inject([CashParkingService], (service: CashParkingService) => {
    expect(service).toBeTruthy();
  }));
});
