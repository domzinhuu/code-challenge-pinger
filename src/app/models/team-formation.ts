export interface TeamFormation {
  id: number;
  name: string;
  coach: Coach;
  captain: Captain;
  lineup: Array<Lineup>;
  bench: Array<Bench>;
}

export interface Coach {
  id: number;
  name: string;
  countryOfBirth: null;
  nationality: null;
}

export interface Captain {
  id: number;
  name: string;
  shirtNumber: number;
}

export interface Lineup {
  id: number;
  name: string;
  position: string;
  shirtNumber: number;
}

export interface Bench {
  id: number;
  name: string;
  position: string;
  shirtNumber: number;
}
