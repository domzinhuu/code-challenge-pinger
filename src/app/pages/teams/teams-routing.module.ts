import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamDetailResolver } from './teams-detail/team-detail-resolve';
import { TeamsDetailComponent } from './teams-detail/teams-detail.component';
import { TeamsResolver } from './teams-resolve';

import { TeamsPage } from './teams.page';

const routes: Routes = [
  {
    path: '',
    component: TeamsPage,
    resolve: {
      teams: TeamsResolver,
    },
  },
  {
    path: 'detail/:teamId',
    component: TeamsDetailComponent,
    resolve: {
      team: TeamDetailResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsPageRoutingModule {}
