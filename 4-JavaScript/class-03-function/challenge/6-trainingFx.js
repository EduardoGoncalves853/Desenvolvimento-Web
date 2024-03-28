// para treinar digitação
const i = 5;
function fatorial(i) {
  if (i === 0 || i === 1) {
    return 1;
  }
  return i * fatorial(i - 1);
}

console.log(fatorial(i));
