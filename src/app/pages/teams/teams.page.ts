import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { identity } from 'lodash';
import { TeamClub } from 'src/app/models/team-club';
import { trackItems } from 'src/app/utils/functions';

@Component({
  selector: 'pg-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  teams: TeamClub[];
  competitionId: number;
  seasonYear: number;
  trackItemsNgFor = trackItems;
  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRouter.params.subscribe((params) => {
      this.competitionId = Number(params.id);
      this.seasonYear = Number(params.season);
    });
    this.teams = this.activatedRouter.snapshot.data.teams;
  }

  public goToTeamDetail(teamId: number): void {
    this.router.navigateByUrl(
      `/competitions/${this.competitionId}/teams/${this.seasonYear}/detail/${teamId}`
    );
  }
}
