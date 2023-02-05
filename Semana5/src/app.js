import Funcionario from "./funcionario.js";
import Fatura from "./fatura.js";
import Personagem from "./personagem.js";
import { Cachorro, Gato } from "./animal.js";
import CalculadoraDeArea from "./calculadoraDeArea.js";
import Juros from "./juros.js";

// exercicio 1
const ada = new Funcionario("528.442.040-31", "Ada Lovelace", 1000);

console.log(ada.salario); // 1000

ada.promover(50);

console.log(ada.salario); // 1500

//exercicio 2

const melao = new Fatura(123, "Melão", 2, 3);

const valor = melao.obterValorTotal();

console.log(valor); // 6

//exercicio 3

const alyx = new Personagem("Alyx");

console.log(alyx.percentualVida); // 100

alyx.sofreuDano(50);

console.log(alyx.percentualVida); // 50

alyx.usouKitMedico();

console.log(alyx.percentualVida); // 60


//exercicio 4

const snoopy = new Cachorro('snoopy', 10);
console.log( snoopy.som );   // "latido"     
const frajola = new Gato('frajola', 8);
console.log( frajola.som );   // "miado"

//exercicio 5

const quadA = new CalculadoraDeArea("quadrado", 6, 6);
const areaQA = quadA.calcular();
console.log(areaQA); // 36

const triangB = new CalculadoraDeArea("triangulo", 8, 7);
const areaTB = triangB.calcular();
console.log(areaTB); // 28

//exercicio 6



const aplicacao1 = new Juros(10000, 0.07, 24);
const aplicacao2 = new Juros(10000, 0.15, 10);

console.log("Aplicação 1");
console.log(aplicacao1.calcularJurosSimples());
console.log(aplicacao1.calcularJurosCompostos());
console.log("Aplicação 2");
console.log(aplicacao2.calcularJurosSimples());
console.log(aplicacao2.calcularJurosCompostos());