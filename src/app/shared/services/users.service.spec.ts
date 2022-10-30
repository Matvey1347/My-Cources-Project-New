import { TestBed } from '@angular/core/testing';

import { StatusUsersService } from './users.service';

describe('StatusUsersService', () => {
  let service: StatusUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
