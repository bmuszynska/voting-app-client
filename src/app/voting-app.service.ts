import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICandidate } from './models/candidate';
import { IVoter } from './models/voter';

@Injectable({
  providedIn: 'root'
})
export class VotingAppService {
  private baseUrl: string = "https://localhost:5138/api/";
  private candidatesUrl: string = this.baseUrl + "Candidates";
  private votersUrl: string = this.baseUrl + "Voters";

  constructor(private http: HttpClient) { }

  public addCandidate(name: string) {
    return this.http.post(this.candidatesUrl, { name: name });
  }

  public addVoter(name: string) {
    return this.http.post(this.votersUrl, { name: name });
  }

  public candidateGotVote(candidate: ICandidate) {
    return this.http.patch(this.candidatesUrl + '/' + candidate.id + '/gotVote', null);
  }

  public getCandidates(): Observable<ICandidate[]> {
    return this.http.get<ICandidate[]>(this.candidatesUrl)
  }

  public getVoters(): Observable<IVoter[]> {
    return this.http.get<IVoter[]>(this.votersUrl)
  }

  public voterVoted(voter: IVoter) {
    return this.http.patch(this.votersUrl + '/' + voter.id + '/hasVoted', null);
  }
}
