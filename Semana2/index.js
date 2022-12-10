var idade = parseInt(prompt("Qual sua idade"))

if(idade>=0 && idade <= 15){
    alert("Jovem")
}else if(idade >15 && idade <=64){
    alert("Adulto")
}else if(idade>64){
    alert("Idosos")
}
else{
    alert("Dado inválido inserido")
}
