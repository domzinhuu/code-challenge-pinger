import { Player, Team } from './booking';

export interface Substitution {
  minute: number;
  team: Team;
  playerOut: Player;
  playerIn: Player;
}
