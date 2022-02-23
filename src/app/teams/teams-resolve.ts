import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Competition } from 'src/app/models/competition';
import { CompetitionService } from 'src/app/services/competition/competition.service';
import { TeamClub } from '../models/team-club';
import { TeamService } from '../services/team/team.service';

@Injectable({ providedIn: 'root' })
export class TeamsResolver implements Resolve<TeamClub[]> {
  constructor(private teamService: TeamService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<TeamClub[]> {
    const seasonYear = Number(route.params.season);
    const competitionID = Number(route.params.id);
    return this.teamService.getTeamsByCompetition(competitionID, seasonYear);
  }
}
