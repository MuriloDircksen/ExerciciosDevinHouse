function exec2() {
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

function exec3(){
    var numero = parseInt(prompt("DIgite número para resolver a tabuada?"))
    var resultado = '';
    if(!isNaN(numero)){
        for(i=0; i<=10; i++){
            resultado = resultado + `${numero} x ${i} = ${numero*i} \n`
        }
    }
    alert(resultado)
}

function exec4(){
    var numero, soma = 0;
    while(numero !== -1){
        numero = parseFloat(prompt("DIgite um número?"))
        if(isNaN(numero) || numero === -1){
            break;
        }else  {
            soma+=numero
        }
        
    }
    alert(soma)
}
function exec5(){
    var numero = parseInt(prompt("Digite um número?"))
    var par=0;
    var impar=0;
    for(i=0;i<=numero;i++){
        if(i % 2 === 0){
            par += 1
        }
        else{
            impar += 1
        }
    }
    alert(`Pares: ${par}\n Impares: ${impar}`)
}