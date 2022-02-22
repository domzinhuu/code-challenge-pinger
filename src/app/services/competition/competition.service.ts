import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Competition } from 'src/app/models/competition';

@Injectable({
  providedIn: 'root',
})
export class CompetitionService {
  constructor(private httpClient: HttpClient) {}

  public getCompetitions(): Observable<Array<Competition>> {
    return this.httpClient
      .get<any>(`${environment.apiUrl}/competitions?plan=TIER_ONE`)
      .pipe(map((res) => res.competitions));
  }
}
