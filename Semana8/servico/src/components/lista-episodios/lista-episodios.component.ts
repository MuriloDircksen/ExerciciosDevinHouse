import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-episodios',
  templateUrl: './lista-episodios.component.html',
  styleUrls: ['./lista-episodios.component.css']
})
export class ListaEpisodiosComponent {

  @Input() episodios : any[] =[];
}
