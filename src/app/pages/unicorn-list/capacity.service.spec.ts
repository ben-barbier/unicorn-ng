import { TestBed, inject } from '@angular/core/testing';

import { CapacityService } from './capacity.service';

describe('CapcityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CapacityService]
    });
  });

  it('should be created', inject([CapacityService], (service: CapacityService) => {
    expect(service).toBeTruthy();
  }));
});
