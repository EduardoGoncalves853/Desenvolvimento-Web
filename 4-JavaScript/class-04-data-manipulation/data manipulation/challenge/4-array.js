const myArray = Array("A", 1, () => "a");

console.log(myArray); // Output: ["A", 1, () => "a"]
console.log(myArray[0]); // Output: A
console.log(myArray[2]()); // Output: a
console.log(myArray.join("_")); // Output: A_1_a

const MyName = "Eduardo";
console.log(MyName.split("").reverse().join("")); // Output: odraduE

const myName = "Eduardo";
console.log(myName.slice(1, -2)); // Output: dua

const arrayTechs = ["HTML", "CSS", "Git"];

arrayTechs.push("JavaScript");
arrayTechs.push("Só acredito veno!");

const removeitemEND = arrayTechs.pop(); // LIFO
console.log(removeitemEND + " foi removido com sucesso!"); // Output: Só acredito veno! foi removido com sucesso!

const removeitemSTART = arrayTechs.shift();
console.log(removeitemSTART + " foi removido com sucesso!"); // Output: HTML foi removido com sucesso!

arrayTechs.unshift("React");
arrayTechs.unshift("SQL");

console.log(arrayTechs); // Output: ["SQL", "React", "CSS", "Git", "JavaScript"]

console.log(arrayTechs.includes("JavaScript")); // Output: true
console.log("A" == "a"); // Output: false

console.log(arrayTechs.indexOf("GiT")); // Output: -1 (not exist)

console.log(arrayTechs.keys()); // Output: Object [Array Iterator] {}

console.log(arrayTechs.slice(-1)); // Output: ["JavaScript"]
console.log(arrayTechs.slice(-3, -1)); // Output: ["CSS", "Git"]

console.log(arrayTechs); // Output: ["SQL", "React", "CSS", "Git", "JavaScript"]

console.log(arrayTechs.splice(-2)); // Output: ["Git", "JavaScript"]

console.log(arrayTechs); // Output: ["SQL", "React", "CSS"]

console.log(myArray.concat(arrayTechs)); // Output: ["A", 1, () => "a", "SQL", "React", "CSS"]
