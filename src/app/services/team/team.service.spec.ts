import { fakeAsync, TestBed } from '@angular/core/testing';
import { TeamClub } from 'src/app/models/team-club';

import { TeamService } from './team.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { noop } from 'rxjs';
import { mockTeams } from 'src/app/test/mocks/competition-mocks';

describe('TeamService', () => {
  let httpTestingController: HttpTestingController;
  let service: TeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TeamService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

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

  // i make only this tests to validate my knowledge about testing and dont expend much time in the challenge ok?
});
