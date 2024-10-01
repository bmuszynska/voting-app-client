import { IPerson } from "./person";

export interface ICandidate extends IPerson {
    voteCount: number;
}