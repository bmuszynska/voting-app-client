import { TestBed } from '@angular/core/testing';

import { VotingAppService } from './voting-app.service';

describe('VotingAppService', () => {
  let service: VotingAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotingAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
