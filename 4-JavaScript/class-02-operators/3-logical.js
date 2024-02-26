// logical Operators (Boolean)

// and &&
// or ||
// not !

// Go to Walt Disney?


let creditCard = true;
let hasCredit = true;

//* Caso em algum console tenha um número grande de exclamações

//todo | exemplo: console.log(!!!!!!!!!!creditCard);
// caso o número de (!) for par, o valor true ou false vai ser o inicial
//* | let creditCard = true ➡ exemplo: console.log(!!!!!!!!!!creditCard); ➡ 10! ➡ true

//todo | exemplo: console.log(!!!!!!!!!!!creditCard);
// O contrario acontece com um número impar de exclamações
//* | let creditCard = true ➡ exemplo: console.log(!!!!!!!!!!!creditCard); ➡ 11! ➡ false

console.log(!!creditCard);
true
console.log(!(!creditCard));
true
console.log(!creditCard);
false;
console.log(creditCard);
true;

console.log(creditCard && hasCredit);
true;

const saveMoney = true;
const getLoan = true

console.log(saveMoney || !getLoan); true
