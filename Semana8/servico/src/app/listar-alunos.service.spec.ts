import { TestBed } from '@angular/core/testing';

import { ListarAlunosService } from './listar-alunos.service';

describe('ListarAlunosService', () => {
  let service: ListarAlunosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarAlunosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
