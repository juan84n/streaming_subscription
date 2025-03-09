import { TestBed } from '@angular/core/testing';

import { UserLoggedInService } from './user-logged-in.service';

describe('UserLoggedInService', () => {
  let service: UserLoggedInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLoggedInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
