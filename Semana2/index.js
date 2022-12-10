function exec1() {
    var idade = parseInt(prompt("Qual sua idade"))

    if (idade >= 0 && idade <= 15) {
        alert("Jovem")
    } else if (idade > 15 && idade <= 64) {
        alert("Adulto")
    } else if (idade > 64) {
        alert("Idosos")
    }
    else {
        alert("Dado inválido inserido")
    }
}

function exec2(){
    var numero = parseInt(prompt("DIgite número para resolver a tabuada?"))
    var resultado = '';
    if(!isNaN(numero)){
        for(i=0; i<=10; i++){
            resultado = resultado + `${numero} x ${i} = ${numero*i} \n`
        }
    }
    alert(resultado)
}