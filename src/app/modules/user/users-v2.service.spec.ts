import { TestBed } from '@angular/core/testing';

import { UsersV2Service } from './users-v2.service';

describe('UsersV2Service', () => {
  let service: UsersV2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersV2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
