import { TestBed } from '@angular/core/testing';

import { PersonagensStarwarsService } from './personagens-starwars.service';

describe('PersonagensStarwarsService', () => {
  let service: PersonagensStarwarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonagensStarwarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
