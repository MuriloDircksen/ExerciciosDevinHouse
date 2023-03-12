import { Observable } from 'rxjs';
import { IUsuario } from './../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http : HttpClient) { }

  getUsuarios() : Observable<IUsuario[]>{
    return this.http.get<IUsuario[]>(`${API_PATH}/users`);
  }
}
