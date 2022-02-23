import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DateTime } from 'luxon';
import { BehaviorSubject, Observable } from 'rxjs';

const SELECTED_SEASON = 'selected_season';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  private season: number;
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor(public alertController: AlertController) {
    const localStorageSeason = localStorage.getItem(SELECTED_SEASON);
    this.season = localStorageSeason
      ? Number(localStorageSeason)
      : new Date().getFullYear();
  }

  public setSeason(season: number): void {
    this.season = season;
  }

  public getSeason(): number {
    return this.season;
  }

  public calculatePercentageToEndSeason(
    startDate: string,
    endDate: string
  ): number {
    const start = DateTime.fromISO(startDate);
    const end = DateTime.fromISO(endDate);
    const today = DateTime.now();
    const totalDaysUntilEnd = start.until(end).count('days');
    const totalDaysPast = start.until(today).count('days');

    const percentage = Number(
      ((totalDaysPast * 100) / totalDaysUntilEnd).toPrecision(2)
    );

    if (isNaN(percentage)) {
      return 0;
    }

    return percentage > 100 ? 100 : Number(percentage);
  }

  public async showAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Ops',
      subHeader: title,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  public showLoading(): void {
    this.loadingSubject.next(true);
  }

  public hideLoading(): void {
    this.loadingSubject.next(false);
  }

  public loading(): Observable<boolean> {
    return this.loading$;
  }
}
