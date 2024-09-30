import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICandidate } from '../models/candidate';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})

export class CandidatesComponent {
  @Output() public addCandidateClicked = new EventEmitter<string>();
  @Input() public candidates: ICandidate[] = [];
  public displayColumns = ['name', 'voteCount']
  public onAddCandidate(name: string) {
    this.addCandidateClicked.emit(name);
  }
}
