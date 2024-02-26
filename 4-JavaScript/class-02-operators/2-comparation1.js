// > >=
// < <=
// == !=
// === !==

//* Valor Declarado

let num1 = 2;

let num2 = 3;

//todo Maior, menor || Maior que, menor que ⬇...

//* Se num1 é maior que num2
console.log(num1 > num2);
//? false

//* Se num1 é menor que num2
console.log(num1 < num2); 
//? true

//* Se num1 é maior ou igual a 2
console.log(num1 >= 2); 
//? true

//* Se num1 é menor ou igual a 3
console.log(num2 <= 3); 
//? true

//todo Igual(==) diferente(!=) ⬅ Type, Caractere, Número ⬇...

//* Se num1 é igual a num2
console.log(num1 == num2);
 //? false

//* Se num1 é diferente de num2
console.log(num1 != num2); 
//? true

//* Se num1 é igual a "2" que no caso é uma (String)
console.log(num1 == "2"); 
//? true

//* Se num1 é estritamente igual a "2", ou seja, além de ser uma (String), tem que ter o mesmo caractere
console.log(num1 === "2");
//? false

//* Se num1 é diferente de "2", não ser um string nem o mesmo número
console.log(num1 != "2");
//? false

//* Se num1 é diferente de "2" não ser uma string com um caractere 2
console.log(num1 !== "2"); 
//? true
