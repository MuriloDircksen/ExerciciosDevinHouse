import { Observable } from 'rxjs';
import { Personagem } from './personagem';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environments';
import { PersonagemModel } from 'src/components/star-wars/personagem-model';

@Injectable({
  providedIn: 'root'
})
export class PersonagensStarwarsService {



  constructor(private _http : HttpClient) { }

  public getPersonagens() : Observable<Personagem[]>{
    return this._http.get<Personagem[]>(`${API_PATH}`)
  }
  public getPersonagemId(id:string): Observable<Personagem[]>{
    return this._http.get<Personagem[]>(`${API_PATH}/`.concat(id));

  }

  public cadastarPersonagem(personagem : PersonagemModel) : Observable<PersonagemModel>{ //incompatibilidade de classes diferentes
    return this._http.post(`${API_PATH}`, personagem);
  }
  public atualizarPersonagem(id : string, personagem : PersonagemModel) : Observable<PersonagemModel>{
    return this._http.put(`${API_PATH}/`.concat(id), personagem);
  }
  public removerPersonagem(id : string) {
    return this._http.delete(`${API_PATH}/`.concat(id));
  }
}
