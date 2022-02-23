import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TeamClub } from 'src/app/models/team-club';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private httpClient: HttpClient) {}

  public getTeamsByCompetition(
    competitionID: number,
    season: number
  ): Observable<Array<TeamClub>> {
    return this.httpClient
      .get<any>(
        `${environment.apiUrl}/competitions/${competitionID}/teams?season=${season}`
      )
      .pipe(map((res) => _.orderBy(res.teams, ['shortName'])));
  }

  public getTeamsDetail(teamID: number): Observable<TeamClub> {
    return this.httpClient.get<any>(`${environment.apiUrl}/team/${teamID}`);
  }
}
