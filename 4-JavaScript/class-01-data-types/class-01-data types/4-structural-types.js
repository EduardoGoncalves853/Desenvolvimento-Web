// object

let nameStudent = "Eduardo";
let age = 30;
let profission = "Web Developer \nData A analyst";

console.log(profission);

let pokemon = {
  name: "Blastoise",
  level: 30,
  type: "Water",
  attack: () => "pound",
  special: () => "hydropump",
};

console.log(pokemon);
console.log(typeof pokemon);
console.log(pokemon.name);
console.log(pokemon.level);
console.log(pokemon["type"]);
console.log(pokemon.attack());
console.log(pokemon.special());

// Array (Vector)

// let pokedex = ["Charmander", "bulbasour", "squirtle"];

let pokedex = [
  { name: "Charmander", level: 6 },
  { name: "bulbasour", level: 5 },
  { name: "squirtle", level: 4 },
];

console.log(pokedex);
console.log(typeof pokedex);
console.log(pokedex[0]);
console.log(pokedex[2]);
console.log(pokedex[1][0]);
console.log(pokedex[0]);
