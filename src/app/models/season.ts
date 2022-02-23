export interface Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  availableStages: Array<string>;
  winner?: Winner;
}

export interface Winner {
  crestUrl: string;
  id: number;
  name: string;
  shortName: string;
  tla: string;
}
