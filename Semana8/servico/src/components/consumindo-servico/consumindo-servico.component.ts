import { Component, OnInit } from '@angular/core';
import { ListarAlunosService } from './../../app/listar-alunos.service';

@Component({
  selector: 'app-consumindo-servico',
  templateUrl: './consumindo-servico.component.html',
  styleUrls: ['./consumindo-servico.component.css']
})
export class ConsumindoServicoComponent implements OnInit {

  public recebendoDadosServico1 : string[] = [];
  public recebendoDadosServico2 : string[] = [];
  public recebendoDadosServico3 : string[] = [];

  constructor( private _listagemDeAlunoService : ListarAlunosService){}

  ngOnInit(): void {
    this.getInformacaoServiceAluno1();
    this.getInformacaoServiceAluno2();
    this.getInformacaoServiceAluno3();
  }

  public getInformacaoServiceAluno1(){
    return this.recebendoDadosServico1 = this._listagemDeAlunoService.getAluno1();
  }

  public getInformacaoServiceAluno2(){
    return this.recebendoDadosServico2 = this._listagemDeAlunoService.getAluno2();
  }

  public getInformacaoServiceAluno3(){
    return this.recebendoDadosServico3 = this._listagemDeAlunoService.getAluno3();
  }

}
