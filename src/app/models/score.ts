export interface Score {
  winner: string;
  duration: string;
  fullTime: Timer;
  halfTime: Timer;
  extraTime: Timer;
  penalties: Timer;
}

export interface Timer {
  homeTeam: number;
  awayTeam: number;
}
