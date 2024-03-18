let num1 = 81;
let num2 = 3; 

//* Soma
console.log(num1 + num2);
//* Subtração
console.log(num1 - num2); 
//* Produto de uma multiplicação(resultado)
console.log(num1 * num2);
//* Quociente de uma divisão(resultado)
console.log(num1 / num2); 
//* Resto de uma divisão
console.log(num1 % num2); 
//* Potência
console.log(num1 ** num2); 
//* Raiz quadrada
console.log(num1 ** (1 / 2));
console.log(Math.sqrt(num1)); // Outra maneira de imprimir a raiz quadrada de num1.


console.log(num2); // Imprime o valor de num2.
console.log(num2); // Imprime o valor atual de num2.
//? mesma coisa ↓
console.log(num2++); // Imprime o valor de num2, e então incrementa num2.
console.log(++num2); // Incrementa num2, e então imprime o valor de num2.

let num = 2;
console.log(num); // Imprime o valor de num.
console.log(num--); // Imprime o valor de num, e então decrementa num.
console.log(num); // Imprime o valor ( atual ) de num.
console.log(--num); // Decrementa num, e então imprime o valor de num.
//todo As próximas linhas repetem o processo de decrementar num e imprimir seu valor.
console.log(++num + 2); // Incrementa num, e então adiciona 2 ao resultado antes de imprimir.

// Assignment
let number;

number = 3;

number += 2; // 3 + 2.
number -= 2; // 3 - 2.
number *= 2; // 3 * 2.
number /= 2; // 3 / 2.
number %= 2; // O resto de 3 / 2 é 1.
number **= 2; // 3 ** 2 ou 3².

console.log(number);
