import { Component } from '@angular/core';
import { ICandidate } from './models/candidate';
import { IVoter } from './models/voter';
import { VotingAppService } from './voting-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public candidates: ICandidate[] = [];
  public title = 'voting-app-client';
  public voters: IVoter[] = [];
  public votersWhoCanVote: IVoter[] = [];

  constructor(
    private voteAppService: VotingAppService
  ) { }

  public addCandidate(name: string) {
    this.voteAppService.addCandidate(name).subscribe({
      next: () => {
        this.getCandidates();
      }
    });
  }

  public addVoter(name: string) {
    this.voteAppService.addVoter(name).subscribe({
      next: () => {
        this.getVoters();
      }
    });
  }

  public getCandidates() {
    this.voteAppService.getCandidates().subscribe(candidates => {
      this.candidates = candidates;
    })
  }

  public getVoters() {
    this.voteAppService.getVoters().subscribe(voters => {
      this.voters = voters;
      this.votersWhoCanVote = this.voters.filter(voter => voter.hasVoted === false);
    })
  }

  public ngOnInit() {
    this.getCandidates();
    this.getVoters();
  }

  public vote(event: any) {
    this.voteAppService.voterVoted(event.voter).subscribe({
      next: () => {
        this.getVoters();
      },
    });
    this.voteAppService.candidateGotVote(event.candidate).subscribe({
      next: () => {
        this.getCandidates();
      },
    });
  }
}
