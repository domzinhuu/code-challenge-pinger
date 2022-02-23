import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Competition } from '../models/competition';
import { CompetitionService } from '../services/competition/competition.service';
import * as _ from 'lodash';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.page.html',
  styleUrls: ['./competition.page.scss'],
})
export class CompetitionPage implements OnInit {
  groupedCompetition: any[];
  season: number;
  constructor(
    private competitionService: CompetitionService,
    private helperService: HelperService
  ) {}

  ngOnInit() {
    this.competitionService
      .getCompetitions()
      .subscribe((res: Competition[]) => {
        this.groupCompetitionByArea(res);
      });
  }

  private groupCompetitionByArea(competitions: Competition[]): void {
    const grouped = _.groupBy(competitions, 'area.name');
    this.groupedCompetition = _.toArray(grouped);
  }
}
