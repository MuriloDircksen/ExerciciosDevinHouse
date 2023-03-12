import { ProdutosService } from './../../../service/produtos.service';
import { IProduto } from './../../../models/produto';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  listaProdutos: IProduto[]=[];

  constructor(private produtosService: ProdutosService){
    this.getListaProdutos();
  }

  async getListaProdutos(){
    this.produtosService.getListaProdutos().subscribe((produtos)=>{
      this.listaProdutos = produtos;


    });
  }

}
