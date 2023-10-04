// Crie uma função que remova um elemento específico de um Array
// Insira um nome do elemento e o array
// retorne o Array um valor atualizado

function deleteElementArray(element, array) {
    const index = array.indexOf(element);
    index != -1 ? array.splice(index, 1) : "";
    return array;
}

const arrayTechs = ["HTML", 10, "CSS", 20, "JavaScript", 30]
console.log(arrayTechs.slice(1, 3));
console.log(arrayTechs.splice(1, 3));
console.log(arrayTechs);

console.log(arrayTechs);
console.log(deleteElementArray("CSS", arrayTechs));