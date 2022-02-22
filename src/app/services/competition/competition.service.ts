import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Competition } from 'src/app/models/competition';
import { TeamClub } from 'src/app/models/team-club';

@Injectable({
  providedIn: 'root',
})
export class CompetitionService {
  headers = new HttpHeaders();
  constructor(private httpClient: HttpClient) {
    this.headers.append('X-Auth-Token', '7f64a29067c24d3ead2d11afff83e7b1');
  }

  public getCompetitions(): Observable<Array<Competition>> {
    return this.httpClient
      .get<any>(`${environment.apiUrl}/competitions?plan=TIER_ONE`, {
        headers: this.headers,
      })
      .pipe(map((res) => res.competitions));
  }


}