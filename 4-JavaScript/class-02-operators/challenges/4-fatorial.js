// Fatorial sem recursão
console.time("fatorial sem recursão");

let An = [0];
let lastAr = An[An.length - 1];

while (lastAr > 1) {
  lastAr -= 1;
  An.push(lastAr);
}

console.log(An.reduce((total, valorAtual) => total * valorAtual, 1));

console.timeEnd("fatorial sem recursão");

// Fatorial com recursão
console.time("fatorial com recursão");
function fatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

console.log(fatorial(1));
console.timeEnd("fatorial com recursão");
