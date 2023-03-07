import { API_PATH } from 'src/environments/enviroments';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ISerie} from '../models/serie'

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http: HttpClient) { }

  getSeries(): Observable<ISerie[]>{
    return this.http.get<ISerie[]>(`${API_PATH}/series`);
  }

  getSerie(id: string): Observable<ISerie>{
    return this.http.get<ISerie>(`${API_PATH}/series/${id}`);
  }
}
