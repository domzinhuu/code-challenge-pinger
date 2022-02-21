import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompetitionService {
  constructor() {}

  public getCompetitions(filters: any): Observable<any> {
    return of([{ item: '1' }, { item: '2' }]);
  }
}
