import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';

const SELECTED_SEASON = 'selected_season';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  private season: number;
  constructor() {
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
}
