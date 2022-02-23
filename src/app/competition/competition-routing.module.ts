import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionResolver } from './competition-detail/competition-detail-resolve';
import { CompetitionDetailPage } from './competition-detail/competition-detail.page';
import { CompetitionStandingResolver } from './competition-detail/competition-standings-resolve';

import { CompetitionPage } from './competition.page';

const routes: Routes = [
  {
    path: '',
    component: CompetitionPage,
  },
  {
    path: ':id',
    component: CompetitionDetailPage,
    resolve: {
      competition: CompetitionResolver,
      standings: CompetitionStandingResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompetitionPageRoutingModule {}
