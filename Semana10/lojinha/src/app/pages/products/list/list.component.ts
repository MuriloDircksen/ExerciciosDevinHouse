import { ProdutosService } from './../../../service/produtos.service';
import { IProduto } from './../../../models/produto';
import { Component } from '@angular/core';
import { SearchPipe } from 'src/app/pipes/search.pipe';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  keySearch: string = '';
  listaProdutos: IProduto[]=[];

  constructor(private produtosService: ProdutosService, private pipe: SearchPipe){
    this.getListaProdutos();
  }

  async getListaProdutos(){
    this.produtosService.getListaProdutos().subscribe((produtos)=>{
      this.listaProdutos = produtos;


    });
  }

}
