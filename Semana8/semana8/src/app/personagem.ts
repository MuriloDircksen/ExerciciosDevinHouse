export class Personagem{
  id?:string;
  nome:string;
  habilidade:string;
  planeta:string
  armas:string;
  avatar:string;

  constructor(nome:string, habilidade:string, planeta:string, armas:string, avatar:string){

    this.nome=nome;
    this.habilidade=habilidade;
    this.planeta=planeta;
    this.armas=armas;
    this.avatar=avatar;
  }
}
