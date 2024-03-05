
const dateNow = new Date() / 1000 / 60 / 60 / 24 / 365; // Obtém a data atual
const insertIdade = Number(prompt("Digite sua idade"));
 // Insira a idade desejada aqui

function CalcIdade(dateNow, insertIdade) {
    const findIdade = (dateNow - insertIdade) ;
    return { findIdade };
  }
  
  const idade = CalcIdade(dateNow, insertIdade);
  console.log(idade);



