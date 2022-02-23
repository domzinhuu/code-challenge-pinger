import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Competition } from 'src/app/models/competition';
import { Season } from 'src/app/models/season';
import { CompetitionStanding } from 'src/app/models/standing';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'pg-competition-item',
  templateUrl: './competition-item.component.html',
  styleUrls: ['./competition-item.component.scss'],
})
export class CompetitionItemComponent implements OnInit {
  @Input() competition?: Competition;
  @Input() pastSeason?: Season;
  @Input() standing?: CompetitionStanding;
  @Output() action = new EventEmitter();
  progressValue: number;
  constructor(private helperService: HelperService) {}

  ngOnInit() {
    if (this.competition) {
      this.progressValue = this.helperService.calculatePercentageToEndSeason(
        this.competition.currentSeason.startDate,
        this.competition.currentSeason.endDate
      );
    }

    if (this.pastSeason) {
      this.competition.currentSeason = this.pastSeason;
    }
  }
}
