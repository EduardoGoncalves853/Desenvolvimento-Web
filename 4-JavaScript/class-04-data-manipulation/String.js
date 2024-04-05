let myName = "Eduardo";

// string immutable ou seja: Não tem como ser mudado
console.log(myName.__proto__);
console.log(myName.length);
console.log(myName[1]);
console.log("_____________________________________");
console.log(myName.toLocaleUpperCase());
console.log(myName.toLocaleLowerCase());
console.log(myName.toUpperCase());

let phrase = "Im a web developer and web designer";
console.log("_____________________________________");
//split: separar, dividir ou fragmentar
console.log((phrase.split(" ")[2] = "WEB"));
console.log(phrase.split("").reverse().join(""));
console.log("_____________________________________");
//replace: como o nome já diz, serve pra reposicionar ou recolocar coisas no log
console.log(phrase.replace("web", "WEB"));
console.log(phrase.replaceAll("web", "WEB"));
console.log("_____________________________________");
console.log(phrase.trim());
console.log(phrase.substring());
console.log("_____________________________________");
//case sensitive
console.log(phrase.includes)("web" == "web"); 
console.log('Teste Verdadeiro');
console.log(
  phrase.toLocaleLowerCase().includes("web")
    ? "Teste Verdadeiro"
    : "Teste Falso"
);
const consoles = {
  log: () => {
    return "imprimir";
  },
};
consoles.log();
console.log();

// aplication.console.log
console.log();
