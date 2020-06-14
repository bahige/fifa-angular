import { TestBed } from '@angular/core/testing';

import { TeamcarrierService } from './teamcarrier.service';

describe('TeamcarrierService', () => {
  let service: TeamcarrierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamcarrierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
