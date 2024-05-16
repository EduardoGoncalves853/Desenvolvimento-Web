var a = prompt("Digite um numero para (a)");
var b = prompt("Digite um numero para (b)");
var c = prompt("Digite um numero para (c)");

function bhaskara(a, b, c) {
  var delta = b * b - 4 * a * c;
  if (delta < 0) {
    return "Delta é negativo, a equação não possui raízes reais.";
  }
  var x1 = (-b + Math.sqrt(delta)) / (2 * a);
  var x2 = (-b - Math.sqrt(delta)) / (2 * a);
  return [x1, x2];
}

var resultado = bhaskara(a, b, c);

console.log(resultado);
