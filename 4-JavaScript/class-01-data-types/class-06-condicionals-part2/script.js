// const weekDay = new Date().getDay(); // 1-7

const weekDay = 2; // 0-6

console.log(weekDay);
const adult = 6; if (adult >= 18) {
console.log("Aprovado!");
}

const month = 0;
switch (weekDay) {
case 0:
case 1:
case 2:
    console.log("Primavera");
break;
case 3:
case 4:
case 5:
   console.log("Verão");
break;
case 6:
   console.log("Sábado");
break; default:
   console.log("Dia não encontrado!");
}

console.log("....");


const option = prompt(`
  Digite a opção desejada:

  1- Consulta
  2- Atendimento
  3- Encerar`
);
switch (option) {
 case "1": alert("Vamos agendar sua consulta");
  break;

 case "2":
  alert("Vamos transferir para um de nossos atendentes")
  break;

 case "3":
  alert("Obrigado volte sempre!");
  break;

 default:
  alert("Opção inválida abestado!");
  break;
}