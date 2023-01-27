const cadastros = []
let testeSenha='';
let testeConta = '';
let conta = 0;
let valor = 0;
let teste = true;
const enviar = document.getElementById("enviar");
const saqueConta = document.getElementById("saque");
const depositoConta = document.getElementById("deposito");
const saldoConta = document.getElementById("saldo");
const operacao = document.getElementById("executa");

enviar.addEventListener('click', (event)=>{
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const celular = document.getElementById("celular").value;
    const senha = document.getElementById("senha").value;
    const confirmaSenha = document.getElementById("confirmacao").value;
   if(senha == confirmaSenha && senha!=""){
    conta = new Date().getTime();
    cadastros.push({
        nome: nome,
        cpf: cpfMask(cpf),
        celular: celular,
        senha: senha,
        conta: conta,
        saldo: 0,
        })
    
        console.log(cadastros);
        alert(`Conta ${conta} criada com sucesso!`);
        conta=0;
   }
   else{
    alert('Conta não criada, senha inválida!')
   }


})

const convert_to_cpf = (number) => {
    const numbers = number?.match(/\d/g)?.join('');
    const eleven_numbers = addLeadingZeros(numbers, 11);
    return cpfMask(eleven_numbers);
  };
  const cpfMask = (cpf) =>{
    cpf=cpf.replace(/\D/g,'');
    cpf=cpf.replace(/(\d{3})(\d)/,'$1.$2');
    cpf=cpf.replace(/(\d{3})(\d)/,'$1.$2');
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,'$1-$2');
    return cpf;
  };

  operacao.addEventListener('click',()=>{
    testeConta = parseInt(prompt('Digite a conta?'));
    testeSenha =  prompt('Digite a senha?');

    cadastros.forEach((elemento)=>{
        console.log(depositoConta.checked, saqueConta.checked )
        if(elemento.conta == testeConta && elemento.senha == testeSenha){
           if(saldoConta.checked){
            consultarSaldo(elemento);
            
           }
           else if(saqueConta.checked){
            valor = parseFloat(prompt("Digite o valor a ser sacado?"))
            saque(elemento, valor);
           }
           else if(depositoConta.checked){
            valor = parseFloat(prompt("Digite o valor a ser depositado?"))
            deposito(elemento, valor);
           }
           teste= false;
        }

        
  } )
console.log(teste)
  if(teste){
    alert('Conta ou senha inválidos!');
}
teste = true;
  testeConta='';
  testeSenha='';
})

  const saque = ((elemento, valor)=>{
   
    if(valor>0){
        if((elemento.saldo-valor)>=0){
            elemento.saldo-= valor;
            console.log(cadastros)
            valor = 0;
            alert(`Saque realizado com sucesso. Saldo atual: ${elemento.saldo}`)
        }
        else{
            alert(`Saldo insuficiente! Saldo atual: ${elemento.saldo}`)
        }
    }
    else{
        alert("Valor inválido!")
    }

  })

  const deposito = ((elemento, valor)=>{
    if(valor>0){
        elemento.saldo+= valor;
        alert(`Deposito realizado com sucesso. Saldo atual: ${elemento.saldo}`)
            console.log(cadastros)
    }
    else{
        alert("Valor inválido!")
    }

  })

  const consultarSaldo = ((elemento)=>{
          
    alert(`Saldo: ${elemento.saldo}`);
    testeSenha='';
            
  })
