import validaCpfCnpj from "./validacpf.js"
export default class Funcionario{
    cpf
    nome
    salario

    constructor(cpf, nome, salario){
        if(validaCpfCnpj(cpf)){
        this.cpf=cpf
        this.nome = nome
        this.salario = salario
        }
        else{
            console.log("CPF inválido")
        }
    }
    promover(percentual){
        this.salario *= (1+percentual/100)
    }
}

 