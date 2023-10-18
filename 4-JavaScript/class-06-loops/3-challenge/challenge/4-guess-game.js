// crie um jogo que adivinhe um numero de 1 a 10
// O jogo encerra qunado acertar o número e apresenta quantas tentativas levou
// O programa deve ser encerrado caso o usuário clique em cancelar

const randomNumber = Math.ceil(Math.random() * 10);

let countTry = 1;
while (true) {
  const guessNumberUser = prompt("Adivinhe o número de 1 a 10");


  if (guessNumberUser === null) {
      alert("Programa cancelado");
      break;
    }
  
    if ((guessNumberUser < 1 || guessNumberUser > 10)) {
        alert("CALA....A...SUA..BOCA MAAAACAAAACOOOO")
        continue
    }
    
    if (guessNumberUser === "" || isNaN(guessNumberUser)) {
        alert("Insira um número de 1 a 10")
        continue
    }
   
    const gameOver = Number(guessNumberUser) === randomNumber;
    if (gameOver) {
      alert(`Parabéns voçê acertou em ${countTry} tentativa(s)`);
      break;
    }

  countTry++;
}

