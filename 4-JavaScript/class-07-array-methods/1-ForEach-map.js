// const rectangle = [
//   { width: 4, height: 5 },
//   { width: 7, height: 10 },
//   { width: 14, height: 7 },
// ];

// const calculateAreas = rectangle.map((value, index) => {
//   return {
//     name: `Retângulo ${index + 1}`,
//     area: value.width * value.height,
//   };
// });

// console.log(calculateAreas);
// console.table(calculateAreas);
// document.write(JSON.stringify(calculateAreas));

// example
//* Declaramos uma variavel com um array
let nums = [42, 51, 24, 98, 65, 12];
// Dobramos cada número na lista
//* o .map vai passar por cada número do array e dobrar
let nums1 = nums.map((n) => n * 2);
// Função para dobrar e ordenar a lista
function doubleAndSort(x) {
  x.sort((a, b) => a - b);
  return x;
}

//.....
console.log("valor inicial ☟");
console.log(nums);
console.log("valor inicial dobrado ☟");
console.log(nums1);
//dobrou | ordenou ☟
console.log("valor inicial ordenado ☟");
console.log(nums.sort());
console.log("valor inicial ordenado e dobrado ☟");
console.log(doubleAndSort(nums1));
//....
console.log("nossa que pinto enorme!");
