const cadastros = {
    nome: '',
    cpf: '',
    celular: '',
    senha: '',
    conta: 0,
    saldo: 0,
    }

let conta = 0;
const enviar = document.getElementById("enviar");

enviar.addEventListener('click', ()=>{
    const nome = document.getElementById("nome");
    const cpf = document.getElementById("cpf");
    const celular = document.getElementById("celular");
    const senha = document.getElementById("senha");
    const confirmaSenha = document.getElementById("confirmacao");
   if(senha.value == confirmaSenha.value){
    conta = new Date().getTime();
    const novoCadastro = {
        nome: nome,
        cpf: cpf,
        celular: celular,
        senha: senha,
        conta: conta,
        saldo: 0,
        }
        cadastros.push(novoCadastro);
        console.log(cadastros);
        alert(`Conta ${conta} criada com sucesso!`);
   }
   else{
    alert('Conta não criada, senha inválida!')
   }


})
