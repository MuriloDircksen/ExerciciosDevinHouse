export default class Fatura {
    id
    descricao
    quantia
    preco
  
    constructor(id, descricao, quantia, preco) {
      this.id = id;
      this.descricao = descricao;
      if(quantia<0){
      this.quantia = 0;
      }
      else{
        this.quantia = quantia;
      }
      if(preco<0){
        this.preco=0;
      }
      else{
      this.preco = preco;
      }
    }
  
    obterValorTotal() {
      return this.quantia * this.preco;
    }
  
    get valorTotal() {
      return this.obterValorTotal();
    }
  }