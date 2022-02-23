import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CompetitionPageRoutingModule } from './competition-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CompetitionDetailPage } from './competition-detail/competition-detail.page';
import { CompetitionPage } from './competition.page';

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
