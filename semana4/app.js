const cadastros = []
let testeSenha='';
let testeConta = '';
let conta = 0;
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
    conta=0;
        console.log(cadastros);
        alert(`Conta ${conta} criada com sucesso!`);
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
        
        if(elemento.conta == testeConta && elemento.senha == testeSenha){
           if(saldoConta.checked){
            consultarSaldo(elemento);
           }
           else if(saqueConta.checked){
            saque(elemento);
           }
           else if(depositoConta.checked){
            deposito(elemento);
           }

        }
        else{
            alert('Conta ou senha inválidos!');
        }
  } )
  testeConta='';
  testeSenha='';
})

  const saque = ((elemento)=>{


  })

  const deposito = ((elemento)=>{


  })

  const consultarSaldo = ((elemento)=>{
          
    alert(`Saldo: ${elemento.saldo}`);
    testeSenha='';
            
  })
