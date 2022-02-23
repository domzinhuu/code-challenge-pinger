import { fakeAsync, TestBed } from '@angular/core/testing';
import { Competition } from '../../models/competition';

import { CompetitionService } from './competition.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { mockCompetitions } from '../../test/mocks/competition-mocks';
import { HttpClient } from '@angular/common/http';

describe('CompetitionService', () => {
  let httpTestingController: HttpTestingController;
  let service: CompetitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
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

  // i make only this tests to validate my knowledge about testing and dont expend much time in the challenge ok?
});
