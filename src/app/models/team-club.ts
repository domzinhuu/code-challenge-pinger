import { NumberValueAccessor } from '@angular/forms';
import { Area } from './area';
import { Player } from './booking';
import { Competition } from './competition';

export interface TeamClub {
  id: number;
  area: Area;
  name: string;
  shortName: string;
  tla: string;
  crestUrl: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  founded: number;
  clubColors: string;
  venue: string;
  lastUpdated: string;
  activeCompetitions?: Array<Competition>;
  squad?: Array<Player>;
}
