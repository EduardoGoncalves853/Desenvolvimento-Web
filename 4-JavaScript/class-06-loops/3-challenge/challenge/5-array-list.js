//* Faça um Menu com as seguintes opções:
/*
    Digite a opção desejada:

    1 - Cadastrar item
       OK - Poder cadastrar itens enquanto não cancelar
       OK - Alertar usuário para adicionar item caso não informe
        - Mostrar mensagem de sucesso junto do nome ao cadastrar
        - Fazer alerta de item cadastrado caso ele já esteja cadastrado

    2 - Ver itens cadastrados
        - Mostrar itens cadastrados
        - Alertar caso a lista esteja vazia

    3 - Remover item cadastrado
        - Alertar caso a lista esteja vazia
        - Poder remover itens pelo nome enquanto não cancelar
        - Remover item automaticamente caso só tenha um na lista
        - Mostrar mensagem de sucesso junto do nome ao remover
        - Alertar usuário caso o item informado não seja encontrado

    4 - Sair do programa
        - Sair do programa quando escolher a opção 4 ou cancelar
        - Se não escolher uma das opções do menu mostrar mensagem de alerta
*/

const listItens = [];

while (true) {
  const menuOption = prompt(
    `Digite a opção desejada:
    1 - Cadastar item
    2 - Ver itens registrados
    3 - Remover item cadastrado
    4 - Sair do programa
    `
  );

  //* elses para caso a escolha seja negativa ao objetivo

  if (menuOption === "4" || menuOption === null) {
    break;
  }

  if (menuOption === "") {
    alert("meu fi, escolha pelo menos um!!");
    continue;
  }

  switch (menuOption) {
    case "1":
      console.log("Opção 1");

      while (true) {
        const addItem = prompt("Digite o nome do item para adicionar");

        if (addItem === null) {
          break;
        }

        addItem.trim();
        if (addItem.trim() === "") {
          alert("Por favor, digite um nome para cadastrar, não aguento mais");
          continue;
        }

        if (listItens.includes(addItem)) {
          alert("Item já cadastrado!");
        } else {
          listItens.push(addItem);
          alert(`"${addItem}" cadastrado(a) com sucesso!`);
        }
      }

      break;

    case "2":
      if (listItens.length === 0) {
        alert("Fiado só amanhã!");
      } else {
        alert(listItens.join("-"));
        continue;
      }

      break;

    case "3":
      console.log("Opção 3");
      break;

    default:
      alert("Opção inválida");
  }
}

alert("Programa encerrado!");
