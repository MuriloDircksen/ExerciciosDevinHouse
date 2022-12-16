function maxMin(valores){
    
    if(valores == null||  valores.length===0){
        console.log('Não é possível encontrar')
    }else{
    let max = Math.max(...valores);
    let min = Math.min(...valores);

    console.log(`Maior número ${max}, e menor valor ${min}`)
    }
}
const minMax = (valores) =>{
    
    if(valores == null||  valores.length===0){
        console.log('Não é possível encontrar')
    }else{
    let max = Math.max(...valores);
    let min = Math.min(...valores);

    console.log(`Maior número ${max}, e menor valor ${min}`)
    }
}
//let valores = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]
//let valores = []
//let valores = [1]
//let valores =[1, -1]
//let valores = null
//let valores = [-2,-2,-2,-2] 
let valores = [20,10, 30]
maxMin(valores);
minMax(valores);

const mensagemOla = (nome) =>{
    return `Olá ${nome}`
}
let nome = "Mariana"
console.log(mensagemOla(nome))

const juntaArray = (array1, array2) => {
    //método 1
    let novoArray1= [].concat(array1, array2);
    //método 2
    let novoArray2=[...array1, ...array2];
    console.log(novoArray1+"\n"+novoArray2)
}
let [array1, array2] = [[1, 2, 3], [4, 5, 6]];

juntaArray(array1, array2)

const juntaObjeto = (objeto1, objeto2) => {
    //método 1
    const novoObjeto1= Object.assign({}, objeto1, objeto2);
    
    //método 2
    let novoObjeto2={...objeto1, ...objeto2,};
    console.log(JSON.stringify(novoObjeto1)+"\n"+JSON.stringify(novoObjeto2))
    console.log(novoObjeto1);
    console.log(novoObjeto2);
}
let objeto1 = { a: 1, b: 2 };
let objeto2 = { c: 3, d: 4 };
juntaObjeto(objeto1, objeto2)


const somaTudo = (inicial, ...args) =>{
    console.log(args)
    //let total2=0;
    let total = args.reduce((total, numero)=>total+numero,inicial);
   // total2 = args.map(e=>total2+e);
    console.log(total)
}

somaTudo(1, 2, 3, 4);

const palindromo = (str) => {
    let inverte='';
    for ( i = str.length - 1; i >= 0; i--) { 
        inverte += str[i]; 
    }
    if(str ===inverte){
        return console.log("É palindromo")
    }else{
        return console.log("Não é palindromo")
    }
   
}
palindromo('julia')

const destruct = (obj) =>{
    const {nome, idade, profissao}=obj;
    console.log(`Esta é ${nome}, tem ${idade} anos e é ${profissao}.`)
}

const pessoa = {
    nome: 'Ada',
    idade: 36,
    profissao: 'matemática'
  };
  destruct(pessoa);

  const uneDobraRetorna = (arr, ...resto)=>{
        let dobra = resto.map(e=>e*2);
        let une=[...arr, ...dobra];
        return une
  }
  const r1 = uneDobraRetorna([1, 2, 3], 4, 4)
console.log(r1) // [1, 2, 3, 8, 8]

const r2 = uneDobraRetorna([2], 10, 4, 8) 
console.log(r2) // [2, 20, 8, 16]

const r3 = uneDobraRetorna([6, 8]) 
console.log(r3) // [6, 8]