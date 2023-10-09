//⚠Desafio 9: 
//Crie uma função para calcular média do aluno
//A média da escola é 7 e ela realiza duas provas
//Apresente a média e a situação se aprovado ou reprovado



function AverageCalculator(average1, average2) {
    return (average1 + average2) / 2;
}

let average1 = 8.7;
let average2 = 7.678;
let studentAverage = AverageCalculator(average1, average2);
let schoolAverage = 7;

console.log("A média do aluno é " + studentAverage.toFixed(1));

if (studentAverage >= schoolAverage) {
    console.log("O aluno foi aprovado.");
} else {
    console.log("O aluno foi reprovado.");
}
