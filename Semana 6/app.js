//exercicio 1

console.log("exercicio 1");

function sleep ( valor ) {
    return new Promise ( (res, rej) => { 
       setTimeout( ()=>{
            res(`Função concluida, ${valor}!`)
       }, 3000 )
    }).then((resultado)=>{
        console.log(resultado);
    })
  }
sleep("teste")

//exercicio 2

console.log("Exercicio 2")

const repetir = setInterval(() => {

    const data = new Date(); // momento atual 
    const horas = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();

    const hhmmmss = [horas, minutos, segundos].join(':');

    console.log(hhmmmss)

},1000);

setTimeout(() => clearInterval(repetir), 10000);

// exercicio 3

console.log("Exercicio 3");

function aprovarDadosCadastrais( cliente ) {
    return new Promise( (resolve, reject) => {
        if (cliente.cpf === 11111111111)
            resolve(true);
        else
            reject(false);
    });
}

function aprovarValorSolicitado( cliente, valor ) {
    return new Promise( (resolve, reject) => {
        if (cliente.margem >= valor)
            resolve(true);
        else
            reject(false);
    });
}

const cliente = { cpf: 11111111111, nome: 'Calleri', margem: 1000.0 };
const aprovacaoCadastro = aprovarDadosCadastrais(cliente);
const aprovacaoValor = aprovarValorSolicitado(cliente, 300.0);

// continue com o tratamento dos resultados de ambas as promises...

Promise.all([aprovacaoCadastro, aprovacaoValor])
.then((resultado)=>{
    console.log("Aprovado");
})
.catch((err)=>{
    console.log("Reprovado");
})
.finally(()=>{
    console.log("Fim do processamento");
})

//Exercicio 4

console.log("Exercicio 4");

const fakeTime = () => parseInt(Math.random() * 10000);

const retornoEmpresa1 = new Promise((resolve) => setTimeout(resolve, fakeTime(), 'Empresa 1'));

const retornoEmpresa2 = new Promise((resolve) => setTimeout(resolve, fakeTime(), 'Empresa 2'));

// ... continue daqui ....

Promise.race([retornoEmpresa1, retornoEmpresa2])
.then((resultado) =>{
    console.log(resultado)
})
.catch((err) =>{
    console.log(err)
})
.finally(()=>{
    console.log("Fim da execução!")
})

// exercicio 5

console.log("Exercicio 5");


async function obterClienteNoBancoDeDados(idCliente) {
    
            const cliente = { nome: 'bruce wayne', id: idCliente };
            return cliente;
    
}

function processar() {
    obterClienteNoBancoDeDados(7)
        .then(cliente => console.log(cliente));
}

processar();