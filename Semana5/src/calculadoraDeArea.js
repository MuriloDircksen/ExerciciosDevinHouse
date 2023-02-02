export default class CalculadoraDeArea{
    tipo
    base
    altura

    constructor(tipo, base, altura){
        this.tipo = tipo;
        this.altura = altura;
        this.base = base;
    }

    calcular(){
        if(this.tipo === "triangulo"){
            return this.base*this.altura/2;
        }
        else if (this.tipo === "quadrado"){
            return this.base*this.altura;
        }
    }
}