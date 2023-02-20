const cadastros = []
let testeSenha='';
let testeConta = '';
let conta = 0;
let valor = 0;
let teste = true;
const enviarFormulario = document.getElementById("form");
const saqueConta = document.getElementById("saque");
const depositoConta = document.getElementById("deposito");
const saldoConta = document.getElementById("saldo");
const formOperacao = document.getElementById("form-operacao");
const operacao = document.getElementById("operacao");

enviarFormulario.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    const senha = document.getElementById("senha").value;
    const confirmaSenha = document.getElementById("confirmacao").value;
   if(senha !== confirmaSenha){
      alert('Conta não criada, senha inválida!')
      return;
   }
  
   const nome = document.getElementById("nome").value;
   const cpf = document.getElementById("cpf").value;
   const celular = document.getElementById("celular").value;
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

  formOperacao.addEventListener('submit',(event)=>{
    event.preventDefault();

    testeConta = parseInt(event.target.conta.value);
    const operacao = event.target.operacao.value;
    const valor = parseFloat(event.target.valor.value);
    testeSenha =  event.target.senhaOperacao.value;

    const contaAtual = cadastros.find((elemento) => elemento.conta === testeConta);
    
    if(!contaAtual){
      alert("Conta inválida")
      return;
    }
    if(contaAtual.senha !== testeSenha){
      alert("Senha inválida")
      return;
    }
        
    switch(operacao){
      case 'saque' :
        sacar(contaAtual, valor);
        break;
      case 'deposito' :
        depositar(contaAtual, valor);
        break;
      case 'saldo' :
        consultarSaldo(contaAtual, valor);
        break;
      default :
        alert("Operação inválda!");
        break;
    }

  
  
  testeConta='';
  testeSenha='';
});

  const sacar = ((conta, valor)=>{
   
    if(valor>0){
        if(conta.saldo >= valor){
            conta.saldo-= valor;
            valor = 0;
            console.log(cadastros)
            alert(`Saque realizado com sucesso. Saldo atual: ${conta.saldo}`)
            return;
        }
        
        alert(`Saldo insuficiente! Saldo atual: ${conta.saldo}`)
        return;
    }
    
    alert("Valor inválido!")
    

  })

  const depositar = ((conta, valor)=>{
    if(valor>0){
        conta.saldo+= valor;
        alert(`Deposito realizado com sucesso. Saldo atual: ${conta.saldo}`)
        console.log(cadastros)
        return;
    }
    
    alert("Valor inválido!")
    

  })

  const consultarSaldo = ((conta)=>{
          
    alert(`Saldo: ${conta.saldo}`);
    testeSenha='';
            
  });

operacao.addEventListener('change', (event) =>{
  const valorEntrada = document.getElementById('valor');

  if(event.target.value === 'saldo'){
    valorEntrada.disabled = true;
    valorEntrada.value = '';
    return;
  }
  valorEntrada.disabled = false;
});


  
