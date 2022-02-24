import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamClub } from 'src/app/models/team-club';
import { trackItems } from 'src/app/utils/functions';

@Component({
  selector: 'pg-teams-detail',
  templateUrl: './teams-detail.component.html',
  styleUrls: ['./teams-detail.component.scss'],
})
export class TeamsDetailComponent implements OnInit {
  team: TeamClub;
  trackItemsNgFor = trackItems;
  constructor(private acitivatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.team = this.acitivatedRoute.snapshot.data.team;
  }

  public trimTeamPosition(position: string): string {
    return position ? position.substring(0, 2).toUpperCase() : '--';
  }
}
