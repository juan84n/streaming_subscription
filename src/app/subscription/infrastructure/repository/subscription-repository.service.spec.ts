import { TestBed } from '@angular/core/testing';

import { RepositoryInMemoryService } from './subscription-repository.service';

describe('RepositoryInMemoryService', () => {
  let service: RepositoryInMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositoryInMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
