import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICandidate } from '../models/candidate';

import { IPerson } from '../models/person';
import { IVoter } from '../models/voter';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent {
  public candidateInput: string = "";
  @Input() public candidates: ICandidate[] = [];
  public selectedCandidate: null | IPerson = null
  public selectedVoter: null | IPerson = null;
  @Output() public voteClicked = new EventEmitter<{ candidate: ICandidate, voter: IVoter }>();
  @Input() public voters: IVoter[] = [];

  public isDisabled() {
    return this.selectedCandidate === null || this.selectedVoter === null;
  }

  public onCandidateSelected(candidate: IPerson) {
    this.selectedCandidate = candidate;
  }

  public onVote() {
    this.voteClicked.emit({ candidate: this.selectedCandidate as ICandidate, voter: this.selectedVoter as IVoter })
    this.ngOnInit();
  }

  public onVoterSelected(voter: IPerson) {
    this.selectedVoter = voter;
  }

  public ngOnInit() {
    this.selectedCandidate = null;
    this.selectedVoter = null;
  }
}
