
import { Component, OnInit } from '@angular/core';
import { Personagem } from 'src/app/personagem';
import { PersonagensStarwarsService } from 'src/app/personagens-starwars.service';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent implements OnInit {

  public personagens : Personagem[]=[];

  constructor(private _personagemStarwarsService:PersonagensStarwarsService){}


  ngOnInit():void{
    this._personagemStarwarsService.getPersonagens().subscribe(
      (res)=> {
        this.personagens = res;
      }
    )
  }

  public getPersonagensDoServico(){

  }
}
