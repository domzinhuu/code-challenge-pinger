import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionItemComponent } from '../components/competition-item/competition-item.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CompetitionItemComponent],
  exports: [CompetitionItemComponent],
  imports: [CommonModule, IonicModule],
})
export class SharedModule {}
