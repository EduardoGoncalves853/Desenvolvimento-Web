const myArray = Array("A", 1, () => "a");

console.log(myArray);
console.log(myArray[0]);
console.log(myArray[2]());
console.log(myArray.join("_"));

const MyName = "Eduardo";
console.log(MyName.split("").reverse().join(""));

const myName = "Eduardo"
console.log(myName.slice(1, -2))

const arrayTechs = ["HTML", "CSS", "Git"];

arrayTechs.push("JavaScript");
arrayTechs.push("Só acredito veno!");

const removeitemEND = arrayTechs.pop(); // LIFO
console.log(removeitemEND + " foi removido com sucesso!");

const removeitemSTART = arrayTechs.shift();
console.log(removeitemSTART + " foi removido com sucesso!");

arrayTechs.unshift("React");
arrayTechs.unshift("SQL");

console.log(arrayTechs);

console.log(arrayTechs.includes("JavaScript"));
console.log("A" == "a");

console.log(arrayTechs.indexOf("GiT")); // -1 not exist

console.log(arrayTechs.keys());

console.log(arrayTechs.slice(-1));
console.log(arrayTechs.slice(-3, -1));

console.log(arrayTechs);

console.log(arrayTechs.splice(-2));


console.log(arrayTechs);

console.log(myArray.concat(arrayTechs));