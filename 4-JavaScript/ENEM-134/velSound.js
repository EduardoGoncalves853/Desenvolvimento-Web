// Questão 134 da prova azul do segundo dia do Enem 2022
// O sinal sonoro oriundo da queda de um grande bloco de gelo de uma geleira é detectado
// por dois dispositivos situados em um barco, sendo que o detector A está imerso em
// água e o B, na proa da embarcação. Sabe-se que a velocidade do som na água é de 1 540 m/s e no ar é de 340 m/s.

function calcularTempos(l) {
  // Cálculo dos tempos
  const t1 = l / 340; // Tempo para o primeiro trem
  const t2 = l / 1540; // Tempo para o segundo trem

  // Diferença entre os tempos
  const diferencaTempos = t1 - t2;

  // Retornar os resultados
  return {
    t1: t1.toFixed(2),
    t2: t2.toFixed(2),
    diferencaTempos: diferencaTempos.toFixed(2),
  };
}

// Exemplo de uso da função
const distancia = 5236; // Distância em metros
const resultados = calcularTempos(distancia);

console.log(`Tempo do primeiro trem (t1): ${resultados.t1} segundos`);
console.log(`Tempo do segundo trem (t2): ${resultados.t2} segundos`);
console.log(
  `Diferença entre os tempos: ${resultados.diferencaTempos} segundos`
);
