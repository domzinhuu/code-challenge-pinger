export interface Booking {
  minute: number;
  team: Team;
  player: Player;
  card: string;
}

export interface Player {
  id: number;
  name: string;
  position?: string;
  dateOfBirth?: string;
  countryOfBirth?: string;
  nationality?: string;
  shirtNumber?: string;
  role?: string;
}

export interface Team {
  id: number;
  name: string;
  crestUrl: string;
}
