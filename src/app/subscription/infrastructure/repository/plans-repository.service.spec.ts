import { TestBed } from '@angular/core/testing';

import { PlansRepositoryService } from './plans-repository.service';

describe('PlansRepositoryService', () => {
  let service: PlansRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlansRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
