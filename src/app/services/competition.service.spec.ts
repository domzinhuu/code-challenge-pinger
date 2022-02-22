import { fakeAsync, TestBed } from '@angular/core/testing';
import { Competition } from '../models/competition';

import { CompetitionService } from './competition.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { noop } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { TeamClub } from '../models/team-club';

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
    service.getCompetitions().subscribe((res: Array<Competition>) => {
      expect(res.length).toBeGreaterThan(1);
    });

    const req = httpTestingController.expectOne(
      'https://api.football-data.org/v2/competitions?plan=TIER_ONE'
    );

    req.flush(mockCompetitions);
  }));

  it('should be return a 404 error if the season dont exists in api', fakeAsync(() => {
    const season = 2018;
    const competitionID = 2013;

    service.getTeamsByCompetition(competitionID, season).subscribe(
      (res: Array<TeamClub>) => noop,
      (err: HttpErrorResponse) => {
        expect(err.status).toBe(404);
        expect(err.error.message).toBe(
          'The resource you are looking for is restricted. Please pass a valid API token and check your subscription for permission.'
        );
      }
    );

    const req = httpTestingController.expectOne(
      'https://api.football-data.org/v2/competitions/2013/teams?season=2018'
    );

    req.flush(
      {
        message:
          'The resource you are looking for is restricted. Please pass a valid API token and check your subscription for permission.',
      },
      { status: 404, statusText: 'Not Found' }
    );
  }));

  it('should be return a team list', fakeAsync(() => {
    const season = 2018;
    const competitionID = 2013;

    service
      .getTeamsByCompetition(competitionID, season)
      .subscribe((res: Array<TeamClub>) => {
        expect(res.length).toBeGreaterThan(1);
        const teamOne = res[0];

        expect(teamOne.tla).toBeTruthy();
        expect(teamOne.tla).toBe('FLU');
      });

    const req = httpTestingController.expectOne(
      'https://api.football-data.org/v2/competitions/2013/teams?season=2018'
    );

    req.flush(mockTeams);
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

const mockTeams = {
  count: 3,
  filters: {},
  competition: {
    id: 2013,
    area: {
      id: 2032,
      name: 'Brazil',
    },
    name: 'Campeonato Brasileiro Série A',
    code: 'BSA',
    plan: 'TIER_ONE',
    lastUpdated: '2021-07-20T18:42:17Z',
  },
  season: {
    id: 726,
    startDate: '2021-05-30',
    endDate: '2021-12-05',
    currentMatchday: 37,
    winner: null,
  },
  teams: [
    {
      id: 1765,
      area: {
        id: 2032,
        name: 'Brazil',
      },
      name: 'Fluminense FC',
      shortName: 'Fluminense',
      tla: 'FLU',
      crestUrl: 'https://crests.football-data.org/1765.svg',
      address:
        'Rua Álvaro Chaves 41, Bairro Laranjeiras Rio de Janeiro, RJ 22231-220',
      phone: '+55 (21) 25537240',
      website: 'http://www.fluminense.com.br',
      email: 'secretaria@fluminense.com.br',
      founded: 1902,
      clubColors: 'Maroon / Green / White',
      venue: 'Estadio Jornalista Mário Filho',
      lastUpdated: '2021-05-18T13:21:24Z',
    },
    {
      id: 1766,
      area: {
        id: 2032,
        name: 'Brazil',
      },
      name: 'CA Mineiro',
      shortName: 'Mineiro',
      tla: 'CAM',
      crestUrl: 'https://crests.football-data.org/1766.svg',
      address: 'Av. Olegário Maciel 1516, Lourdes Belo Horizonte, MG 30180-111',
      phone: '+55 (31) 32901313',
      website: 'http://www.atletico.com.br',
      email: 'fut.base@galo.com.br',
      founded: 1908,
      clubColors: 'Black / White',
      venue: 'Estádio Raimundo Sampaio',
      lastUpdated: '2021-05-31T03:49:48Z',
    },
    {
      id: 1767,
      area: {
        id: 2032,
        name: 'Brazil',
      },
      name: 'Grêmio FBPA',
      shortName: 'Grêmio',
      tla: null,
      crestUrl: 'https://crests.football-data.org/1767.svg',
      address:
        'Avenida Padre Leopoldo Bretano, 110, Humaitá Porto Alegre, RS 90250-590',
      phone: null,
      website: 'http://www.gremio.net',
      email: null,
      founded: 1903,
      clubColors: 'Blue / Black / White',
      venue: 'Arena do Grêmio',
      lastUpdated: '2021-05-15T11:06:07Z',
    },
  ],
};
