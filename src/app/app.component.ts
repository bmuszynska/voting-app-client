import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public candidates: string[] = [
    "Joker",
    "Harley Quinn",
    "Penguin",
    "Riddler",
    "Two-Face",
    "Scarecrow",
    "Poison Ivy",
    "Bane",
    "Mr. Freeze",
    "Ra's al Ghul"
  ];
  public data_candidates = [
    { name: "Joker", voteCount: 0 },
    { name: "Harley Quinn", voteCount: 0 },
    { name: "Penguin", voteCount: 0 },
    { name: "Riddler", voteCount: 0 },
    { name: "Two-Face", voteCount: 0 },
    { name: "Scarecrow", voteCount: 0 },
    { name: "Poison Ivy", voteCount: 0 },
    { name: "Bane", voteCount: 0 },
    { name: "Mr. Freeze", voteCount: 0 },
    { name: "Ra's al Ghul", voteCount: 0 }
  ];
  public data_voters = [
    { "hasVoted": "true", "name": "Luke Skywalker" },
    { "hasVoted": "false", "name": "Darth Vader" },
    { "hasVoted": "true", "name": "Princess Leia" },
    { "hasVoted": "true", "name": "Han Solo" },
    { "hasVoted": "true", "name": "Yoda" },
    { "hasVoted": "false", "name": "Obi-Wan Kenobi" },
    { "hasVoted": "false", "name": "Chewbacca" },
    { "hasVoted": "false", "name": "R2-D2" },
    { "hasVoted": "true", "name": "C-3PO" },
    { "hasVoted": "true", "name": "Emperor Palpatine" }
  ];
  public title = 'voting-app-client';
  public voters: string[] = [
    "Luke Skywalker",
    "Darth Vader",
    "Princess Leia",
    "Han Solo",
    "Yoda",
    "Obi-Wan Kenobi",
    "Chewbacca",
    "R2-D2",
    "C-3PO",
    "Emperor Palpatine"
  ];
}
