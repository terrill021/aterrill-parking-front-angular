import { TestBed, inject } from '@angular/core/testing';

import { ServiceRegisterVehicleService } from './service-register-vehicle.service';

describe('ServiceRegisterVehicleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceRegisterVehicleService]
    });
  });

  it('should be created', inject([ServiceRegisterVehicleService], (service: ServiceRegisterVehicleService) => {
    expect(service).toBeTruthy();
  }));
});
