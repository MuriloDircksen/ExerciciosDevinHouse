import { Component } from '@angular/core';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent {

  lista : any[] = [
  {nome: 'Titanic', duracao: '247'},
  {nome: 'filme2', duracao: '24'},
  {nome: 'filme3', duracao: '100'}
  ]
}
