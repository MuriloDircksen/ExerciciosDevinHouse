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