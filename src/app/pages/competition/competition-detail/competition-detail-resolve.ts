import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Competition } from 'src/app/models/competition';
import { CompetitionService } from 'src/app/services/competition/competition.service';

@Injectable({ providedIn: 'root' })
export class CompetitionResolver implements Resolve<Competition> {
  constructor(private competitionService: CompetitionService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Competition> {
    const competitionID = Number(route.params.id);
    return this.competitionService.getCompetitionById(competitionID);
  }
}
