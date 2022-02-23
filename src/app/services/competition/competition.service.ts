import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Competition } from 'src/app/models/competition';
import { CompetitionStanding } from 'src/app/models/standing';

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

  public getCompetitionById(id: number): Observable<Competition> {
    return this.httpClient.get<Competition>(
      `${environment.apiUrl}/competitions/${id}`
    );
  }

  public getCompetitionStanding(id: number): Observable<CompetitionStanding[]> {
    return this.httpClient
      .get<any>(`${environment.apiUrl}/competitions/${id}/standings`)
      .pipe(map((res) => res.standings));
  }
}
