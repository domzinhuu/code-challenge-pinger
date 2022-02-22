import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TeamClub } from 'src/app/models/team-club';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  headers = new HttpHeaders();

  constructor(private httpClient: HttpClient) {
    this.headers.append('X-Auth-Token', '7f64a29067c24d3ead2d11afff83e7b1');
  }

  public getTeamsByCompetition(
    competitionID: number,
    season: number
  ): Observable<Array<TeamClub>> {
    return this.httpClient
      .get<any>(
        `${environment.apiUrl}/competitions/${competitionID}/teams?season=${season}`,
        {
          headers: this.headers,
        }
      )
      .pipe(map((res) => res.teams));
  }
}
