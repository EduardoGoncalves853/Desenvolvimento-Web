// Crie uma lógica para calcular o somatório das Receitas e das Despesas abaixo

// Imprima os somatórios e o saldo formatado no padão brasileiro,

// Informe se a situação está positiva ou negativa e se existe dívidas.

const incomes = ["salary", "R$ 2000,00", "commission", "R$ 825,45", "bônus", "R$ 320,00"];


const expenses = [
  "rent",
  "R$ 500,00",
  "energy",
  "R$ 325,55",
  "water",
  "R$ 120,34",
  "food",
  "R$ 1300,62",
  "Cabaré da Vanda",
  "R$ 898,95"
];

//? o que é replace?
//* replace serve para recolocar objetos de um array, ou seja,usando como :
  

//!
const incomeValues = incomes.filter((value) => Number(value.replace("R$", "").replace(",", "")));

const incomeValuesNumber = incomeValues.map((value) => {
  return Number (value.replace("R$", "").replace(",", ".")
  );
})
//!

const SumIncomes = incomeValuesNumber.reduce((a, b) => a + b);

//todo
console.log(incomeValues);
console.log(incomeValuesNumber);
console.log(SumIncomes);
//todo

//*
console.log(SumIncomes.toLocaleString("pt-BR", {
    style: "currency",
    currency: "brl"
}));
//*





//!
const expenseValues = expenses.filter((value) => Number(value.replace("R$", "").replace(",", "")));

const expenseValuesNumber = expenseValues.map((value) => {
    return Number (value.replace("R$", "").replace(",", ".")
  );
})
//!

const SumExpenses = expenseValuesNumber.reduce((a, b) => a + b);

function CalculateExpenses(saldo){
  return "R$" + SumIncomes - SumExpenses + ",00"
};

//*
let situation;

alert(`Suas despezas são R$${SumExpenses},00 reais`);
alert(`Suas Despezas: R$${SumExpenses} e sua Receita Bruta: R$${SumIncomes}`);

if (SumIncomes > SumExpenses) {
  alert("Saldo positivo!");
} else if (SumIncomes < SumExpenses){
  alert("Saldo negativo!");
} else if (SumIncomes === SumExpenses) {
  alert("Sem saldo mas sem dívidas!");
}
//*






//todo
console.log(expenseValues);
console.log(expenseValuesNumber);
console.log(SumExpenses);
console.log(situation);
//todo