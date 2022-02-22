export interface Booking {
  minute: number;
  team: Team;
  player: Player;
  card: string;
}

export interface Player {
  id: number;
  name: string;
}

export interface Team {
  id: number;
  name: string;
}
