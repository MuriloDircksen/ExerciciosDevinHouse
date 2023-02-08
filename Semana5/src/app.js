import Funcionario from "./funcionario.js";
import Fatura from "./fatura.js";
import Personagem from "./personagem.js";
import { Cachorro, Gato } from "./animal.js";
import CalculadoraDeArea from "./calculadoraDeArea.js";
import Juros from "./juros.js";
import Time from "./time.js";
import Partida from "./partida.js";
import Usuario from "./usuario.js";

// exercicio 1
console.log("Exercicio 1");
const ada = new Funcionario("528.442.040-31", "Ada Lovelace", 1000);

console.log(ada.salario); // 1000

ada.promover(50);

console.log(ada.salario); // 1500

//exercicio 2
console.log("Exercicio 2");

const melao = new Fatura(123, "Melão", 2, 3);

const valor = melao.obterValorTotal();

console.log(valor); // 6

//exercicio 3

console.log("Exercicio 3");
const alyx = new Personagem("Alyx");

console.log(alyx.percentualVida); // 100

alyx.sofreuDano(50);

console.log(alyx.percentualVida); // 50

alyx.usouKitMedico();

console.log(alyx.percentualVida); // 60


//exercicio 4

console.log("Exercicio 4");
const snoopy = new Cachorro('snoopy', 10);
console.log( snoopy.som );   // "latido"     
const frajola = new Gato('frajola', 8);
console.log( frajola.som );   // "miado"

//exercicio 5

console.log("Exercicio 5");
const quadA = new CalculadoraDeArea("quadrado", 6, 6);
const areaQA = quadA.calcular();
console.log(areaQA); // 36

const triangB = new CalculadoraDeArea("triangulo", 8, 7);
const areaTB = triangB.calcular();
console.log(areaTB); // 28

//exercicio 6

console.log("Exercicio 6");

const aplicacao1 = new Juros(10000, 0.07, 24);
const aplicacao2 = new Juros(10000, 0.15, 10);

console.log("Aplicação 1");
console.log(aplicacao1.calcularJurosSimples());
console.log(aplicacao1.calcularJurosCompostos());
console.log("Aplicação 2");
console.log(aplicacao2.calcularJurosSimples());
console.log(aplicacao2.calcularJurosCompostos());

//exercicio 7

console.log("Exercicio 7");



const times = [
  new Time("Vasco", "VAS"),
  new Time("Fluminense", "FLU"),
  new Time("Flamengo", "FLA"),
  new Time("Botafogo", "BOT"),
]

const partidas = [
  new Partida("VAS", 2, "FLA", 1),
  new Partida("FLU", 1, "BOT", 0),
  new Partida("VAS", 3, "FLU", 1),
  new Partida("FLA", 1, "BOT", 1),
];


times.forEach(time => {
  partidas.forEach(partida => {
    time.computarPartida(partida);
  });
  time.exibirSituacao();
});


//exercicio 8

console.log("Exercicio 8");

const cEmail = document.getElementById("email");
const cSenha = document.getElementById("senha");
const bAcessar = document.getElementById("acessar");
const pMensagem = document.getElementById("mensagem");

const usuarios = [
  new Usuario("Rosa", "rosa@gmail.com", "123456"),
  new Usuario("Pedro", "pedro@gmail.com", "654321"),
];

bAcessar.addEventListener("click", () => {
  const email = cEmail.value;
  const senha = cSenha.value;

  let usuarioEncontrado = null;

  if (email && senha) {
    usuarioEncontrado = usuarios.find(usuario => {
      return usuario.autenticar(email, senha)
    });
  }

  if (usuarioEncontrado) {
    pMensagem.innerHTML = `Olá, ${usuarioEncontrado.nome}!`;
    cEmail.value = "";
    cSenha.value = "";
  } else {
    pMensagem.innerHTML = "E-mail ou senha inválidos!";
  }
})


