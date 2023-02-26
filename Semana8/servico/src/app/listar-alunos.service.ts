import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListarAlunosService {

  public aluno1 : string[] = ["Jose Silva", "front", "jose@abc.com"];
  public aluno2 : string[] = ["Marcio Silva", "back", "marcio@abc.com"];
  public aluno3 : string[] = ["Elena Silva", "dev", "elena@abc.com"];

  constructor() { }

  public getAluno1() : string[]{
    return this.aluno1;
  }

  public getAluno2() : string[]{
    return this.aluno2;
  }

  public getAluno3() : string[]{
    return this.aluno3;
  }

}
