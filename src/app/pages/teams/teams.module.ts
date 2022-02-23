import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamsPageRoutingModule } from './teams-routing.module';

import { TeamsPage } from './teams.page';
import { TeamsDetailComponent } from './teams-detail/teams-detail.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TeamsPageRoutingModule],
  declarations: [TeamsPage, TeamsDetailComponent],
})
export class TeamsPageModule {}
