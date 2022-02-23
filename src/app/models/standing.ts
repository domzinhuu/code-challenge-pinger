import { Team } from './booking';

export interface CompetitionStanding {
  stage: string;
  type: string;
  group: string;
  table: Array<StandingTable>;
}

export interface StandingTable {
  position: number;
  team: Team;
  playedGames: number;
  form: string;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}
