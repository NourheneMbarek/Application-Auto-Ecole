import { TestBed } from '@angular/core/testing';

import { VoituresService } from './voitures.service';

describe('VoituresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VoituresService = TestBed.get(VoituresService);
    expect(service).toBeTruthy();
  });
});
