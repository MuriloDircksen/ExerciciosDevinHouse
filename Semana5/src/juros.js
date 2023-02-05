export default class Juros{
    capitalInicial
    taxaAplicacao
    tempo

    constructor(capitalInicial, taxaAplicacao, tempo){
        this.capitalInicial = capitalInicial;
        this.taxaAplicacao = taxaAplicacao;
        this.tempo = tempo;
    }

    calcularJurosSimples() {
        const C = this.capitalInicial;
        const i = this.taxaAplicacao;
        const t = this.tempo;
        const J = C * i * t;
        return Math.round(C + J);
      }
    
      calcularJurosCompostos() {
        const C = this.capitalInicial;
        const i = this.taxaAplicacao;
        const t = this.tempo;
        const M = C * (1 + i) ** t;
        return Math.round(M);
      }

    
}