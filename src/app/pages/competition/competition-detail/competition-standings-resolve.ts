import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EmptyError, Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Competition } from 'src/app/models/competition';
import { CompetitionStanding } from 'src/app/models/standing';
import { CompetitionService } from 'src/app/services/competition/competition.service';

@Injectable({ providedIn: 'root' })
export class CompetitionStandingResolver
  implements Resolve<CompetitionStanding[]>
{
  constructor(private competitionService: CompetitionService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<CompetitionStanding[]> {
    const competitionID = Number(route.params.id);
    return this.competitionService
      .getCompetitionStanding(competitionID)
      .pipe(catchError((err) => of([])));
  }
}
