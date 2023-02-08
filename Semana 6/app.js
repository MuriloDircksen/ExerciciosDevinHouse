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