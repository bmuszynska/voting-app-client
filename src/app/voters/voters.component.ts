import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IVoter } from '../models/voter';

@Component({
  selector: 'app-voters',
  templateUrl: './voters.component.html',
  styleUrls: ['./voters.component.scss']
})
export class VotersComponent {
  @Output() public addVoterClicked = new EventEmitter<string>();
  @Input() public voters: IVoter[] = [];
  public displayColumns = ['name', 'hasVoted']
  public onAddVoter(name: string) {
    this.addVoterClicked.emit(name);
  }
}
