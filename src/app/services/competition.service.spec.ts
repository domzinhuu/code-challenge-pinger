import { fakeAsync, TestBed } from '@angular/core/testing';

import { CompetitionService } from './competition.service';

describe('CompetitionService', () => {
  let service: CompetitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return a competition list', fakeAsync(() => {
    const filters = {};
    service.getCompetitions(filters).subscribe((res: any) => {
      expect(res.length).toBeGreaterThan(1);
    });
  }));
});
