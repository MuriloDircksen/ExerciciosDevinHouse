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