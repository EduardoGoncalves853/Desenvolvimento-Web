//! ⚠Desafio 13

//* Crie uma função para calcular o fatorial de um número
//* Passe o número via argumento e use um FOR para operação

//TODO for (inicialização; condição; incremento) {
//TODO Código a ser executado repetidamente
//TODO   }  

//? inicialização: É a parte onde você define uma variável e atribui
//?  um valor inicial a ela. Isso é executado apenas uma vez, no início do loop.

//? condição: É uma expressão que é avaliada a cada iteração do loop. Se a condição
//?  for verdadeira, o código dentro do loop é executado. Se for falsa, o loop
//?   é interrompido e a execução continua após o loop.

//? incremento: É uma expressão que é executada após cada iteração do loop.
//?  Geralmente, é usado para atualizar a variável definida na inicialização,
//?   de modo que, eventualmente, a condição se torne falsa e o loop seja interrompido.

function calcularFatorial(numero) {
  
    if (numero < 0) {
      return "O fatorial de números que deve o aluguel não existe";

    } else if (numero === 0 || numero === 1) {
      return 1; //* O fatorial de 0 e 1 é 1
    } else {
      let fatorial = 1;
      for (let i = 2; i <= numero; i++) {
        fatorial *= i; //* Multiplica o fatorial pelo número atual do loop
      }
      return fatorial;
    }
}

  // Ex:

const numero1 = prompt('Digite um número:');
if (numero1 === null) {
    alert('ta querendo me lascar é?');
}else if (numero1 === "" || " "){
    alert('Não consigo ver nada')
} else {
    const resultado1 = calcularFatorial(parseInt(numero1, 10));
    alert(`O fatorial de ${numero1} é ${resultado1}`);
    console.log(`O fatorial de ${numero1} é ${resultado1}`);
}
