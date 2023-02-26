import { HttpClient } from '@angular/common/http';
import { Funcionario } from './funcionario';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioServiceService {

  private url = 'http://localhost:3000/funcionarios';

  constructor(private _httpClient : HttpClient) { }

  public getFuncionarios() : Observable<Funcionario[]>{
    return this._httpClient.get<Funcionario[]>(this.url);
  }
}
