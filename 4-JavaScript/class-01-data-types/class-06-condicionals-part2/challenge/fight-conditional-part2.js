// ⚠Desafio 11

// Crie uma função para converter média para o sistema de caracteres ABC
// Depois diga se o aluno foi aprovado (A, B e C) ou reprovado (D e F):
// As funções devem funcionar com strings e notas inválidas devem retornar mensagem de erro.

// A: 90 - 100
// B: 80 - 89
// C: 70 - 79
// D: 60 - 69
// F:  < - 60


let nota = 90;

switch(true){
    case nota >= 90 :
           console.log('A');
               break;
    case nota >= 80 :
           console.log('B');
               break;
    case nota >= 70 :
           console.log('C');
               break;
    case nota >= 60 :
           console.log('D');
               break;
   default:
           console.log('F');
               break; 
            }

   // (default) é um código onde caso em todas as
   // cases não se identificarem o let ou outro
   
   // EX: se case é > que 80 e < que 60, mas o let for 50, o log vai retornar como default 
   
   
   // vai retornar como default


    
