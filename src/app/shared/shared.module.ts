import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionItemComponent } from '../components/competition-item/competition-item.component';
import { IonicModule } from '@ionic/angular';
import { LoadingComponent } from '../components/loading/loading.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
export const playerFactory = () => player;

@NgModule({
  declarations: [CompetitionItemComponent, LoadingComponent],
  exports: [CompetitionItemComponent, LoadingComponent],
  imports: [
    CommonModule,
    IonicModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
})
export class SharedModule {}
