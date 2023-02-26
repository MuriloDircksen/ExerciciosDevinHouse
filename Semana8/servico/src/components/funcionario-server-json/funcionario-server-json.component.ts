import { Funcionario } from './../../app/funcionario';
import { Component, OnInit } from '@angular/core';
import { FuncionarioServiceService } from 'src/app/funcionario-service.service';

@Component({
  selector: 'app-funcionario-server-json',
  templateUrl: './funcionario-server-json.component.html',
  styleUrls: ['./funcionario-server-json.component.css']
})
export class FuncionarioServerJsonComponent implements OnInit {

  public funcionarios : Funcionario[] = [];

  constructor(private _funcionarioService : FuncionarioServiceService){}

  ngOnInit(): void {

    this._funcionarioService.getFuncionarios().subscribe(
      retorno =>{
        this.funcionarios = retorno.map(info =>{
        return new Funcionario(
          info.id,
          info.nome,
          info.departamento

        )
      })
    }
    );

  }


}
