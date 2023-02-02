import Funcionario from "./funcionario.js";
import Fatura from "./fatura.js";
import Personagem from "./personagem.js";

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
