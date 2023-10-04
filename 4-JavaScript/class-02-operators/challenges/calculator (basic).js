const num1 = Number(prompt("Digite o primeiro número:"));
const num2 = Number(prompt("Digite o seggundo número:"));


console.log(num1)
console.log(typeof num1)


const add = num1 + num2;
const sub = num1 - num2;
const mul = num1 * num2;
const div = num1 / num2;
const rem = num1 % num2;
const exp = num1 ** num2;
const sqr = num1 ** (1 / num2);
// const sqr = num1 + num2;

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)
console.log(num1 ** num2)

document.write(`A soma de ${num1} e ${num2} = ${add} <br>`)

document.write(`A  subtração de ${num1} e ${num2} = ${sub} <br>`)

document.write(`A multiplicação de ${num1} e ${num2} = ${mul} <br>`)

document.write(`A divisão de ${num1} e ${num2} = ${div.toFixed(2)} <br>`)

document.write(`O resto da divisão de ${num1} e ${num2} = ${rem} <br>`)

document.write(`A potência de ${num1} e ${num2} = ${exp} <br>`)

document.write(`A raiz de ${num1} e ${num2} = ${sqr.toFixed(2)} <br>`)
