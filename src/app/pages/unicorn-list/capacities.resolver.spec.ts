import { TestBed, inject } from '@angular/core/testing';

import { CapacitiesResolver } from './capacities.resolver';

describe('ResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CapacitiesResolver]
    });
  });

  it('should be created', inject([CapacitiesResolver], (service: CapacitiesResolver) => {
    expect(service).toBeTruthy();
  }));
});
