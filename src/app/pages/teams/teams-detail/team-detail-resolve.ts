import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TeamClub } from 'src/app/models/team-club';
import { HelperService } from 'src/app/services/helper.service';
import { TeamService } from 'src/app/services/team/team.service';

@Injectable({ providedIn: 'root' })
export class TeamDetailResolver implements Resolve<TeamClub> {
  constructor(
    private teamService: TeamService,
    private helperService: HelperService
  ) {}
  resolve(route: ActivatedRouteSnapshot): Observable<TeamClub> {
    const teamID = Number(route.params.teamId);

    return this.teamService.getTeamDetail(teamID).pipe(
      catchError((err) => {
        this.helperService.showAlert(
          'Not found',
          err.error.message + ', try another season or competition'
        );
        return throwError(err);
      })
    );
  }
}
