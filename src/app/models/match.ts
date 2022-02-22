import { Booking } from './booking';
import { Competition } from './competition';
import { Goal } from './goal';
import { Head2Head } from './head-to-header';
import { Referee } from './referees';
import { Score } from './score';
import { Season } from './season';
import { Substitution } from './substitution';
import { TeamFormation } from './team-formation';

export interface Match {
  head2head: Head2Head;
  match: MatchData;
}

export interface MatchData {
  id: number;
  competition: Competition;
  season: Season;
  utcDate: string;
  status: string;
  minute: string;
  attendance: number;
  venue: string;
  matchday: number;
  stage: string;
  group: string;
  lastUpdated: string;
  homeTeam: TeamFormation;
  awayTeam: TeamFormation;
  score: Score;
  goals: Array<Goal>;
  bookings: Array<Booking>;
  substitutions: Array<Substitution>;
  referees: Array<Referee>;
}
