// variável ArrayNumbers
const ArrayNumbers = [4, 6, 8, 10, 12, 14];

//?__________________
// cria uma constante que soma o número do array presente com o valor passado
const sumArrayNumbers = ArrayNumbers.reduce((prevValue, currentValue) => {
  let count = 0;

  if (prevValue % 2 === 0) {
    console.log("Entrouuu"); //
    count = prevValue = currentValue;
  }
  return count;
});
console.log(sumArrayNumbers); // 14
//?__________________

const shoppingCart = [
  { product: "Arroz", amount: 2, price: 20 },
  { product: "Café", amount: 3, price: 40 },
  { product: "Feijão", amount: 4, price: 60 },
];

const sumShoppingCart = shoppingCart.reduce((prevValue, currentValue) => {
  return prevValue + currentValue.price * currentValue.amount;
  //? price - amount
  // Arroz: Preço = $20, Quantidade = 2
  //  Café: Preço = $40, Quantidade = 3
  // Feijão:Preço = $60, Quantidade = 4
  // Valor total = 40 + 120 + 240 = 400
}, 0);

console.log(sumShoppingCart);
