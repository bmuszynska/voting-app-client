import { TestBed } from '@angular/core/testing';

import { VotingAppServiceService } from './voting-app-service.service';

describe('VotingAppServiceService', () => {
  let service: VotingAppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotingAppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
