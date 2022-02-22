export interface Head2Head {
  numberOfMatches: number;
  totalGoals: number;
  homeTeam: TeamStats;
  awayTeam: TeamStats;
}

export interface TeamStats {
  wins: number;
  draws: number;
  losses: number;
}
