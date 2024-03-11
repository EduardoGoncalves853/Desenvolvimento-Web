/** @format */

// fahrenheit === C * 9/5 + 32;
// Celsius === F *

// entrada

function degreeConvert(degree) {
  const degreeAux = degree.split(" ").join("");

  const arrayDegree = Array.from(degreeAux);
  const scaleDegree = arrayDegree.pop().toUpperCase();
  const newDegree = Number(arrayDegree.join(""));

  if (isNaN(newDegree)) throw new error("Valor Inválido!");

  function convertCelsiusToFahrenheit() {
    return (newDegree * 9) / 5 + 32;
  }

  function convertFahrenheitToCelsius() {
    return ((newDegree - 32) * 5) / 9;
  }

  switch (scaleDegree) {
    case "C":
      return convertCelsiusToFahrenheit() + "F";
    case "F":
      return convertFahrenheitToCelsius() + "C";
    default:
      throw new error("Escala não identificada");
  }
}

console.log(degree);
// graus
console.log(degreeAux);
// tira espeços desneçessários
console.log(arraydegree);
console.log(scaleDegree);
console.log(newDegree);

// saída

try {
  const temperature = "-459F   ";
  const temperatureConverted = degreeConvert(temperature);
  console.log(`${temperature} = ${temperatureConverted}`);
} catch (error) {
  console.error(error);
}
