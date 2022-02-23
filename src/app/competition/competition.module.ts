import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompetitionPageRoutingModule } from './competition-routing.module';

import { CompetitionPage } from './competition.page';
import { CompetitionDetailPage } from './competition-detail/competition-detail.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompetitionPageRoutingModule,
    SharedModule,
  ],
  declarations: [CompetitionPage, CompetitionDetailPage],
})
export class CompetitionPageModule {}
