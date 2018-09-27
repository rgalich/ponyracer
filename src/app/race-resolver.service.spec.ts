import { TestBed, inject } from '@angular/core/testing';

import { RaceResolverService } from './race-resolver.service';

describe('RaceResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RaceResolverService]
    });
  });

  it('should be created', inject([RaceResolverService], (service: RaceResolverService) => {
    expect(service).toBeTruthy();
  }));
});
