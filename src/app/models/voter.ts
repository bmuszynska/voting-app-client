import { IPerson } from "./person";


export interface IVoter extends IPerson {
    hasVoted: boolean;
}