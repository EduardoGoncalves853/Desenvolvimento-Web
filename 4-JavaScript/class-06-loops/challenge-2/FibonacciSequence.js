function calcularFibonacci(numero) {
  if (numero < 0) {
    return "A sequência menor que 0 não existe";
  } else if (numero === 0) {
    return "0"; //* A sequência com 0 começa com 0
  } else if (numero === 1) {
    return "0, 1"; //* A sequência com 1 começa com 0 e 1
  } else {
    let fibonacci = [0, 1];

    for (let i = 2; i <= numero; i++) {
      const nextFib = fibonacci[i - 2] + fibonacci[i - 1];
      fibonacci.push(nextFib);
    }

    return fibonacci.join(',');
  }
}

const numero = prompt('Digite um número:');
if (numero === null) {
  alert('Xiiiiii');
} else {
  const resultado1 = calcularFibonacci(parseInt(numero, 10));
  alert(`A sequência de Fibonacci de ${numero} é ${resultado1}`);
  console.log(`A sequência de Fibonacci de ${numero} é ${resultado1}`);
}
