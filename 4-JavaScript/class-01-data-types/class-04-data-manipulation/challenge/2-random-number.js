// crie uma função capaz de retornar um número aleatório
// dentro de um intervalo determinado de parâmetros min(minimo) e max(maximo)

// function randomNumber(min, max) {
//     return (Math.random() * 5)
// }

// function randomNumber(min, max) {
//     return (Math.floor(Math.random() * max) + min)
// }

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} // 1-5

console.log(randomNumber(1, 3));
console.log(randomNumber(1, 3));
console.log(randomNumber(1, 3));
