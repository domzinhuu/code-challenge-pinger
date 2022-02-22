export interface Goal {
  minute: number;
  extraTime: number;
  type: string;
  team: TeamScorer;
  scorer: Scorer;
  assist: string;
}

export interface Scorer {
  id: number;
  name: string;
}

export interface TeamScorer {
  id: number;
  name: string;
}
