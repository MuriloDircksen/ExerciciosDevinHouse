import { Observable } from 'rxjs';
import { IProduto } from './../models/produto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getListaProdutos():Observable<IProduto[]>{
    return this.http.get<IProduto[]>(`${API_PATH}/products`);
  }
  public cadastarProduto(produto : IProduto) : Observable<IProduto>{
    return this.http.post<IProduto>(`${API_PATH}/products`, produto);
  }

}
