import { ISerie } from 'src/app/models/serie';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() serie!: ISerie;
  show: boolean = false;

  constructor(private route: Router){}

  navegarParaSerie(id: string){
    this.route.navigate([`/series/${id}`]);
  }
}
