class Animal{
    nome 
    idade
    som

    constructor(nome, idade, som){
        this.idade = idade;
        this.nome = nome;
        this.som = som;
    }

}

export class Cachorro extends Animal{
    constructor(idade, nome){
        super()
        this.idade = idade;
        this.nome = nome;
        this.som = "latido"
    }
}

export class Gato extends Animal{
    constructor(idade, nome){
        super()
        this.idade = idade;
        this.nome = nome;
        this.som = "miado"
    }
}