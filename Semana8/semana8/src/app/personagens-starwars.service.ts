import { Observable } from 'rxjs';
import { Personagem } from './personagem';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PersonagensStarwarsService {



  constructor(private _http : HttpClient) { }

  public getPersonagens() : Observable<Personagem[]>{
    return this._http.get<Personagem[]>(`${API_PATH}`)
  }

}
