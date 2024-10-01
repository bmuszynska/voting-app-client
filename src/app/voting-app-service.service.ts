import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICandidate } from './models/candidate';
import { IVoter } from './models/voter';

@Injectable({
  providedIn: 'root'
})
export class VotingAppServiceService {
  private url: string = "http://localhost:5138/api/"

  constructor(private http: HttpClient) { }

  public getCandidates(): Observable<ICandidate[]> {
    return this.http.get<ICandidate[]>(this.url + 'Candidates')
  }

  public getVoters(): Observable<IVoter[]> {
    return this.http.get<IVoter[]>(this.url + 'Voters')
  }

}
