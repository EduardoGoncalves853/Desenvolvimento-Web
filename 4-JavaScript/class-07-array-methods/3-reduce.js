const ArrayNumbers = [2, 4, 6, 8, 10, 12];

const sumArrayNumbers = ArrayNumbers.reduce((prevValue,  currentValue) => {

    let count = 0

if (prevValue % 2 === 0) {
    console.log("Entrouuu");
    count = prevValue = currentValue;
}
return count;
})

console.log(sumArrayNumbers);


const shoppingCart = [
    {product: "Arroz", amount: 2, price: 20},
    {product: "Café", amount: 3, price: 40},
    {product: "Feijão", amount: 4, price: 60},
]


const sumShoppingCart = shoppingCart.reduce((prevValue, currentValue) => {
return prevValue + currentValue.price * currentValue.amount;
}, 0);

console.log(sumShoppingCart);

