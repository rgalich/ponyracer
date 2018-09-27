import { TestBed, inject } from '@angular/core/testing';

import { RacesResolverService } from './races-resolver.service';

describe('RacesResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RacesResolverService]
    });
  });

  it('should be created', inject([RacesResolverService], (service: RacesResolverService) => {
    expect(service).toBeTruthy();
  }));
});
