import { Area } from './area';
import { Season } from './season';

export interface Competition {
  id: number;
  area: Area;
  name: string;
  code: string;
  plan: string;
  currentSeason: Season;
  seasons: Array<Season>;
  lastUpdated: string;
}
