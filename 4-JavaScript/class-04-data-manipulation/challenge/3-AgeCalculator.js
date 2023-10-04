
// crie um programa que permite em que data o usuario nasceu
// Depois escreva na tela quantos ele tem

const dateWasBorn = new Date(prompt("Digite sua data de nascimento(yyyy-mm-dd):"));

const dateNow = new Date();
const userAge = Math.floor((dateNow-dateWasBorn) / 1000 / 60 / 60 / 24 /365.25);
console.log(userAge);
