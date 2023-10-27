//*Avaliação JavaScript
//?Questão 1 (Data Types):
//*Declare as seguintes variáveis e atribua os valores por tipo: String, Number, Boolean, Function, Array, Object

let nome = "Son Goku";
let raça = "Saiyajin";
let PowerLevel = 8.000;

console.log( typeof nome);
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
let YMCA = [Soma, Subtração, Multiplicação, Divisão, RestoDivision, Potência, Raiz, RaizDe3];
console.table(YMCA);

//?Questão 3 (Functions):
//*Crie e execute uma função de nome 'test" que retorne "JavaScript" concatenado com um valor passado como argumento e imprima seu retorno.

function test(value){
    let result = "JavaScript" + value;
    console.log(result);
    return result + "JavaScript";
}

//?Questão 4 (Data Manipulation):
//*Usando os métodos FIFO e LIFO, crie um array com 3 valos e posteriormente insira mais um valor no final e substitua o do início por outro.

let FIFO = [1, 2, 3]
let DePrima = FIFO.shift() // Primeiro elemento

let LIFO = [1, 2, 3]
let Pezin = LIFO.pop() // Último elemento

let add = [1, 2, 3]
let MaisUm = add.push(4); // adiciona mais um

//?Questão 5 (for):
//* Liste todos os valores do array criado na questão anterior ultilizando o for.



//?Questão 6 (while):
//* Escreva os números de 0 a 500 sem os que pertencem à familía do 200 e do 300:



//?Questão 7 (if):

// Crie uma lógica para verificar se o motorista foi multado
// A infração pode ser por velocidade alta (quando ultrapassar a máxima)
// E por velocidade baixa ( quando estiver inferior à metade da máxima )
// A velocidade da pista é de 60km/h

function CheckVel(VelMotorista, VelPermitida) {
        
   const VelMotoristaCalculate = VelPermitida / 2;
    
    if (VelMotorista > 100) {
        return "MINHAAA MULEEERRRR!!"
    } else if(VelMotorista < VelMotoristaCalculate){
        return "E é uma tartaruga é? kkkkkkk";

    } else if(VelMotorista > VelPermitida){
    return "VAI CORTAR GIRO PRA LÁ SEM MÃE!"
    } else  {
        return "Ta dentro cumpade, pode passar";
    }
    
}
console.log(CheckVel(65, 60));


//? Questão 8 (array methods):

// Uma empresa vai dar 10% de aumento para seus funcionários
// Abaixo tem a lista com todos os salários atuais de cada um deles
// Apresente os novos salários e o novo total em folha dessa empresa
// const salary = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000];