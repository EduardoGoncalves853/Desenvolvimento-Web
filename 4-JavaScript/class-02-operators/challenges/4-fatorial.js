const n = prompt("digite o numero no qual queira fatorar");

function fatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

console.log(`seu ${n}! é ${fatorial(n)}`);
