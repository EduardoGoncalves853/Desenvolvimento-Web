//*Avaliação JavaScript

//?Questão 1 (Data Types):
//*Declare as seguintes variáveis e atribua os valores por tipo: String, Number, Boolean, Function, Array, Object

let nome = "Son Goku";
let raça = "Saiyajin";
let PowerLevel = 8.0;

console.log(typeof nome);
console.log(raça);
console.log(typeof PowerLevel);

let SaiyajinPuro = true;
console.log(typeof SaiyajinPuro);

let SaiyajinGostoso = {
  name: "Son Goku",
  age: 41,
  type: "Guerreiro classe baixa",
  attack: () => "punch",
  special: () => "kamehameha",
};

console.log(typeof SaiyajinGostoso);

let arr = [7, 8, 9];
console.log(typeof arr);

console.log("___________________________________");

//?Questão 2 (Operators):
//*Imprima as operações de soma, subtração, multiplicação, divisão, resto da divisão e potenciação de 12 e 3 e raiz quadrada de 144;

let Soma = 12 + 3;
let Subtração = 12 - 3;
let Multiplicação = 12 * 3;
let Divisão = 12 / 3;
let RestoDivision = 12 % 3;
let Potência = Math.pow(12, 3);
let Raiz = Math.sqrt(144);
let RaizDe3 = Math.sqrt(9);
let YMCA = [
  Soma,
  Subtração,
  Multiplicação,
  Divisão,
  RestoDivision,
  Potência,
  Raiz,
  RaizDe3,
];
console.table(YMCA);

console.log("___________________________________");

//?Questão 3 (Functions):
//*Crie e execute uma função de nome 'test" que retorne "JavaScript" concatenado com um valor passado como argumento e imprima seu retorno.

function test(value) {
  let result = "JavaScript" + value;
  return result;
}
console.log(test(1));

console.log("___________________________________");

//?Questão 4 (Data Manipulation):
//*Usando os métodos FIFO e LIFO, crie um array com 3 valos e posteriormente insira mais um valor no final e substitua o do início por outro.
let FIFO = [9, 8, 3];
let DePrima = FIFO.shift(); // Primeiro elemento
console.log(FIFO);

let LIFO = [1, 2, 3, 4];
let Pezin = LIFO.pop(); // Último elemento
console.log(LIFO);

let add = [1, 2, 3];
let MaisUm = add.push(4); // adiciona mais um
console.log(add);

console.log("___________________________________");

//?Questão 5 (for):
//* Liste todos os valores do array criado na questão anterior ultilizando o for.

for (let index = 0; index < add.length; index++) {
  const element = add[index];
  console.log(element);
}

for (const iterator of add) {
  console.log(iterator);
}

//?Questão 6 (while):
//* Escreva os números de 0 a 500 sem os que pertencem à familía do 200 e do 300:

let count = 0;
while (count <= 500) {
  if (count < 200 || count >= 400) {
    console.log(count);
  }
  count++;
}

console.log("_______________________________________");
//?Questão 7 (if):

// Crie uma lógica para verificar se o motorista foi multado
// A infração pode ser por velocidade alta (quando ultrapassar a máxima)
// E por velocidade baixa ( quando estiver inferior à metade da máxima )
// A velocidade da pista é de 60km/h

function CheckVel(VelMotorista, VelPermitida) {
  const VelMotoristaCalculate = VelPermitida / 2;

  if (VelMotorista > 100) {
    return "MINHAAA MULEEERRRR!!";
  } else if (VelMotorista < VelMotoristaCalculate) {
    return "E é uma tartaruga é? kkkkkkk";
  } else if (VelMotorista > VelPermitida) {
    return "VAI CORTAR GIRO PRA LÁ SEM MÃE!";
  } else {
    return "Ta dentro cumpade, pode passar";
  }
}
console.log(CheckVel(65, 60));

console.log("_______________________________________");

//? Questão 8 (array methods):

// Uma empresa vai dar 10% de aumento para seus funcionários
// Abaixo tem a lista com todos os salários atuais de cada um deles
// Apresente os novos salários e o novo total em folha dessa empresa

const a = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000];

function SalaryCalculate(a) {
  return a / 10 + a;
}

const aumento = a.map(SalaryCalculate);

console.log(
  `O salários que originalmente eram ${a} teve um aumento de 10%, ou seja, o valor atual dos salários são: ${aumento}.`
);

console.log("_______________________________________");

const salary = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000];

// const newSalary = salary.map((salary) => salary * 1.1);
// console.log(newSalary);

// const SalaryReduced = newSalary.reduce(
//   (a,
//   (b) => {
//     a + b;
//   })
// );
// let count1 = 0;
// let valorS = 0;
// while (count1 <= salary.length) {

//     valorS = Number(salary[count1] + valorS);
//     count1++;
// }
// console.log(valorS);

let b = 0;
for (let index = 0; index < salary.length; index++) {
  const element = salary[index];
  b = b + element;
}

console.log(b.toLocaleString("pt-br", {
    style: "currency",
    currency: "brl",
  })
);
