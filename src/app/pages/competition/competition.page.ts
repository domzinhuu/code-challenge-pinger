import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Competition } from 'src/app/models/competition';
import { CompetitionService } from 'src/app/services/competition/competition.service';
import { HelperService } from 'src/app/services/helper.service';

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
