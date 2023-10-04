// crie uma função para converter velocidade de m/s para km/h
// solicite a velocidade ao usuário via prompt
//Escreva (write) na tela o resultado

function convertMsToKmh(speed) {
  return speed * 3.6 + "Km/h";
}
console.log(convertMsToKmh(15));


const userSpeed = prompt("Digite a velocidade em m/s");
const converterSpeed = convertMsToKmh(userSpeed);
document.write(converterSpeed);




// const num1 = Number(prompt("Digite o número:"));
// result = num1 % 2 == 0 ? "Par" : "Impar";
// alert(`Seu número é ${result}`);
