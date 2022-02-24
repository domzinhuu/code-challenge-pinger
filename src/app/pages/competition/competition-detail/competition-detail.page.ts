import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Competition } from 'src/app/models/competition';
import { Season } from 'src/app/models/season';
import { CompetitionStanding } from 'src/app/models/standing';
import { HelperService } from 'src/app/services/helper.service';
import { trackItems } from 'src/app/utils/functions';

@Component({
  selector: 'app-competition-detail',
  templateUrl: './competition-detail.page.html',
  styleUrls: ['./competition-detail.page.scss'],
})
export class CompetitionDetailPage implements OnInit {
  competition: Competition;
  competitionStandings: CompetitionStanding;
  pastSeason: Season;
  competitionStandingPastSeason: CompetitionStanding;
  season: number;
  trackItemsNgFor = trackItems;
  constructor(
    private activetedRoute: ActivatedRoute,
    private helperService: HelperService,
    private router: Router
  ) {}

  ngOnInit() {
    this.season = this.helperService.getSeason();
    this.competition = this.activetedRoute.snapshot.data.competition;
    this.competitionStandings = this.activetedRoute.snapshot.data.standings[0];
  }
  public changePastCompetition(id: number): void {
    const pastSeasonCompetition = this.competition.seasons.find(
      (season) => season.id === id
    );

    this.pastSeason = pastSeasonCompetition;
  }

  public formatSeasonLabel(startDate: string, endDate: string): string {
    const start = new Date(startDate).getFullYear();
    const end = new Date(endDate).getFullYear();

    return `${start} / ${end}`;
  }

  public viewAllTeams(season: number): void {
    this.router.navigateByUrl(
      `/competitions/${this.competition.id}/teams/${season}`
    );
  }

  public getCurrentSeasonYear(date: string): number {
    return new Date(date).getFullYear();
  }
}
