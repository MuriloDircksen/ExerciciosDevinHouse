import { IProduto } from './../models/produto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getListaProdutos(){
    return this.http.get<IProduto[]>(`${API_PATH}/products`);
  }
}
