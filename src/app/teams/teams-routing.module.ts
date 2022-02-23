import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsPageRoutingModule {}
