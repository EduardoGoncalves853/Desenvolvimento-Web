// para treinar digitação
const i = 5;
function fatorial(i) {
  if (i === 0 || i === 1) {
    return 1;
  }
  return i * fatorial(i - 1);
}

console.log(fatorial(i));

//..

// function get_primo(number) {

//   if (number % ) {
    
//   }
//   for (let div = 2; div <= Math.sqrt(get_primo(number)); div++) {
//     const element = array[div];
//     if (div == 0 || div == 1) {
//       return ("não é um numero primo")
//     }
//     return element
//   }
// }