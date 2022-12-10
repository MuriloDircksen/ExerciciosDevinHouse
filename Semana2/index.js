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

function exec3() {
    var numero = parseInt(prompt("DIgite número para resolver a tabuada?"))
    var resultado = '';
    if (!isNaN(numero)) {
        for (i = 0; i <= 10; i++) {
            resultado = resultado + `${numero} x ${i} = ${numero * i} \n`
        }
    }
    alert(resultado)
}

function exec4() {
    var numero, soma = 0;
    while (numero !== -1) {
        numero = parseFloat(prompt("DIgite um número?"))
        if (isNaN(numero) || numero === -1) {
            break;
        } else {
            soma += numero
        }

    }
    alert(soma)
}
function exec5() {
    var numero = parseInt(prompt("Digite um número?"))
    var par = 0;
    var impar = 0;
    for (i = 0; i <= numero; i++) {
        if (i % 2 === 0) {
            par += 1
        }
        else {
            impar += 1
        }
    }
    alert(`Pares: ${par}\n Impares: ${impar}`)
}

function exec6() {
    var operacao = prompt("DIgite uma das 4 operações? \n(+, -, *, /)")
    var numero1 = parseFloat(prompt("Digite primeiro número?"))
    var numero2 = parseFloat(prompt("Digite segundo número?"))

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Somente números permitido.")

    } else {
        switch (operacao) {

            case "+":
                alert("Soma:" + (numero1 + numero2))
                break;
            case "-":
                alert("Subtração:" + (numero1 - numero2))
                break;
            case "*":
                alert("Multiplicação:" + (numero1 * numero2))
                break;
            case "/":
                alert("Divisão:" + (numero1 / numero2))
                break;
            default:
                alert("Operação inválida")
                break;
        }

    }
}

function exec7() {
    
    var quantidade = 0;

    for (var i = 2; i <= 1000; i++) {
        var primo = true;
        for (var j = 2; j < i; j++) {

            if (i % j === 0) {
                primo = false;
                break;
            }
        }
        if (primo) {
            
            quantidade += 1;
            console.log(i);
        }

    }
    return console.log("Quantidade: " + quantidade)
}
exec7()

function exec8(){
    var numero = parseInt(prompt("Digite valor?"))
    var raiz = parseInt(prompt("Digite a raiz?"))
    var resultado=''+ numero;
    for(i=0;i<9;i++){
        numero+=raiz;
        resultado+=`, ${numero}`
    }
    alert(`Valor inicial: ${numero}\n Valor raiz: ${raiz}\n P.A: ${resultado}`)
}