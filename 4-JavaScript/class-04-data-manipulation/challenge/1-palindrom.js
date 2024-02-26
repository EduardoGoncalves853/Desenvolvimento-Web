// ⚠️ Desafio: Crie uma função para verificar palíndromos. A lógica deve receber string com palavra ou texto

//? normalText e reverseText ⬇
//* 1. Cria-se uma função que declara duas constantes [normalText e reverseText]
//todo| function (text) => const normalText | reverseText;
//* 2. Faz com que as duas contantes com textos [ "A" , "a" ] tranforme-se em somente "a" com
//todo| text.toLowerCase();
//* 3. Substituiremos os espaços por nada (" ", ""), ou seja, o retiraremos
//todo| .replaceAll(" ", "");

//? reverseText ⬇
//* 4. Usaremos o split com o ("") para somente mexermos adiante com as letras
//todo| .split("");
//* 5. Reverteremos as letras [a b c] para [c b a] ou vice-versa
//todo| .reverse();
//* 6. Usaremos join para juntar os ("") e assim teremos a palavra ao contrário
//todo| .join("")

function isPalindrome(text) {
    const normalText = text.toLowerCase().replaceAll(" ", "");
    const reverseText = text.toLowerCase().replaceAll(" ", "").split("").reverse().join("");
  
    return normalText === reverseText;
  }
  
  const text = "Ame o Poema";
  const result = isPalindrome(text);
  
  console.log(result ? "Verdadeiro" : "Falso");