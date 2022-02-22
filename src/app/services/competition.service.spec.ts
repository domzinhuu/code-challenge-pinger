import { fakeAsync, TestBed } from '@angular/core/testing';
import { Competition } from '../models/competition';

import { CompetitionService } from './competition.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('CompetitionService', () => {
  let httpTestingController: HttpTestingController;
  let service: CompetitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(CompetitionService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return a competition list', fakeAsync(() => {
    const season = 2021;

    service.getCompetitions(season).subscribe((res: Array<Competition>) => {
      expect(res.length).toBeGreaterThan(1);
    });

    const req = httpTestingController.expectOne(
      'https://api.football-data.org/v2/competitions?plan=TIER_ONE'
    );

    req.flush(mockCompetitions);
  }));
});

const mockCompetitions = {
  count: 2,
  filters: {
    plan: 'TIER_ONE',
  },
  competitions: [
    {
      id: 2013,
      area: {
        id: 2032,
        name: 'Brazil',
        countryCode: 'BRA',
        ensignUrl: 'https://crests.football-data.org/764.svg',
      },
      name: 'Campeonato Brasileiro Série A',
      code: 'BSA',
      emblemUrl: 'https://crests.football-data.org/764.svg',
      plan: 'TIER_ONE',
      currentSeason: {
        id: 1377,
        startDate: '2022-04-10',
        endDate: '2022-11-13',
        currentMatchday: 1,
        winner: null,
      },
      numberOfAvailableSeasons: 6,
      lastUpdated: '2021-07-20T18:42:17Z',
    },
    {
      id: 2016,
      area: {
        id: 2072,
        name: 'England',
        countryCode: 'ENG',
        ensignUrl: 'https://crests.football-data.org/770.svg',
      },
      name: 'Championship',
      code: 'ELC',
      emblemUrl: null,
      plan: 'TIER_ONE',
      currentSeason: {
        id: 735,
        startDate: '2021-08-07',
        endDate: '2022-05-09',
        currentMatchday: 34,
        winner: null,
      },
      numberOfAvailableSeasons: 5,
      lastUpdated: '2021-04-17T00:00:18Z',
    },
  ],
};
