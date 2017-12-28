import { TestBed, inject } from '@angular/core/testing';

import { SearchVehiclesService } from './search-vehicles.service';

describe('SearchVehiclesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchVehiclesService]
    });
  });

  it('should be created', inject([SearchVehiclesService], (service: SearchVehiclesService) => {
    expect(service).toBeTruthy();
  }));
});
