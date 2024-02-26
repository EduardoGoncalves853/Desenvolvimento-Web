//!⚠Desafio 9: 
//?Crie uma função para calcular média do aluno
//?A média da escola é 7 e ela realiza duas provas
//*Apresente a média e a situação se aprovado ou reprovado

const average1 = Number(prompt("digite um número de 0 a 10"));
const average2 = Number(prompt("digite um número de 0 a 10"));

// Calcula a média
function AverageCalculator(average1, average2) {
    let average = (average1 + average2) / 2;
    console.log(average);
    return average;
}

var studentAverage = AverageCalculator(average1, average2);

var schoolAverage = 7;

// Verifica se o aluno passou
document.getElementById('result').innerHTML = `A média do aluno é ${studentAverage}`;

if (studentAverage >= schoolAverage) {
    document.getElementById('aluno').innerHTML = "<br>O aluno foi aprovado.";
} else {
    document.getElementById('aluno').innerHTML = "<br>O aluno foi reprovado.";
}
