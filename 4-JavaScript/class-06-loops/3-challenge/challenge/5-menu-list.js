//* Faça um Menu com as seguintes opções:
/*
    Digite a opção desejada:

//*    1 - Cadastrar item
       OK - Poder cadastrar itens enquanto não cancelar
       OK - Alertar usuário para adicionar item caso não informe
        - Mostrar mensagem de sucesso junto do nome ao cadastrar
        - Fazer alerta de item cadastrado caso ele já esteja cadastrado

//*    2 - Ver itens cadastrados
       OK - Mostrar itens cadastrados
       OK - Alertar caso a lista esteja vazia

//*    3 - Remover item cadastrado
       OK - Alertar caso a lista esteja vazia
       OK - Poder remover itens pelo nome enquanto não cancelar
       OK - Remover item automaticamente caso só tenha um na lista
       OK - Mostrar mensagem de sucesso junto do nome ao remover
       OK - Alertar usuário caso o item informado não seja encontrado

//*    4 - Sair do programa
       OK - Sair do programa quando escolher a opção 4 ou cancelar
       OK - Se não escolher uma das opções do menu mostrar mensagem de alerta
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



//todo 1 - Cadastrar itens

  switch (menuOption) {
    case "1":
      console.log("Opção 1");

      while (true) {
        let addItem = prompt("Digite o nome do item para adicionar");

        if (addItem === null) {
          break;
        }

         addItem = addItem.trim().split(" ").filter(Boolean).join(" ")

        if (addItem === "") {
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

//TODO 2 - Ver itens cadastrados

    case "2":
      if (listItens.length === 0) {
        alert("Fiado só amanhã!");
      } else {
        alert(listItens.join("-"));
        continue;
      }

      break;

//TODO 3 - Remover itens Cadastrados      
    case "3":
      console.log("Opção 3");
      if (listItens.length === 1) {

       const removedItemName = listItens.pop() 
       
       alert(`${removedItemName} foi removido com sucesso!`)
    break;
      }
      while (true) {
        if (listItens.length === 0) {
          alert("Lista vazia!")
          break;
        } else {
          let ItemNameToRemoved = prompt("Digite o nome para remover:") 

if (ItemNameToRemoved === null) break;

ItemNameToRemoved = ItemNameToRemoved.trim().split(" ").filter(Boolean).join(" ")
     
if (ItemNameToRemoved === "") {
  alert("Por favor, inserir nome para remover");
  continue;
}

//* if remover pelo nome
if (listItens.includes(ItemNameToRemoved)) {
  listItens.splice(listItens.indexOf(ItemNameToRemoved), 1)
  alert(`${ItemNameToRemoved} foi removido com sucesso!`)

 //* else caso o não encontre o Item pelo nome
} else {
  alert("Item não encontrado!")
}
}
}
  default:
      alert("Opção inválida");
  }

//todo 4 - Sair do programa

  if (menuOption === "4" || menuOption === null) {
    break;
  }
  
  if (menuOption === "") {
    alert("meu fi, escolha pelo menos um!!");
    continue;
  }
}

alert("Programa encerrado!");
