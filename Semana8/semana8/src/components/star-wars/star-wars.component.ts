

import { Component, OnInit } from '@angular/core';
import { Personagem } from 'src/app/personagem';
import { PersonagensStarwarsService } from 'src/app/personagens-starwars.service';
import { PersonagemModel } from './personagem-model';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent implements OnInit {

  public personagens : Personagem[]=[];
  public personagem : PersonagemModel = new PersonagemModel();
  public id : string ='';
  public tipo_template : string ='';

  constructor(private _personagemStarwarsService:PersonagensStarwarsService){}


  ngOnInit():void{
      this._personagemStarwarsService.getPersonagens().subscribe(
      (res)=> {
        this.personagens = res;
      }
    )
    //this.obterTodosPersonagens();
  }

  public obterTodosPersonagens(){ //GET
      this._personagemStarwarsService.getPersonagens().subscribe(
        (res)=> {
         this.personagens = res;
         console.log(res);

        }, (err)=>{
          alert('Nenhum card encontrado!'+ err);
        }
      )

  }

  public obterSomenteUm(){
    this._personagemStarwarsService.getPersonagemId(this.id).subscribe(
      (res)=> {
        console.log(res);
        //this.personagens = res;
        //this.obterTodosPersonagens();

      }, (erro) =>{
        alert('Card não encontrado!')
      }
    )
  } //GET com id

  public adicionarpersonagem(){
    console.log(this.personagem)
    this._personagemStarwarsService.cadastarPersonagem(this.personagem).subscribe(personagem =>{
      personagem = new PersonagemModel();

    }, err =>{
      alert('Erro ao cadastrar o personagem!: ' + err);
    }

    )
  } //Post


  public atualizar(){

    this._personagemStarwarsService.atualizarPersonagem(this.id, this.personagem).subscribe(personagem =>{
      personagem = new PersonagemModel();


    }, err =>{
      alert('Erro ao cadastrar o personagem!: ' + err);
    })
  } // Put

  public remover(){
    this._personagemStarwarsService.removerPersonagem(this.id).subscribe(personagem =>{
      personagem = new PersonagemModel;

    }, err =>{
      alert('Erro ao cadastrar o personagem!: ' + err);
    })
  } //Delete

  mudaTemplate(tipo:string) {
    this.tipo_template = tipo;
}
}
