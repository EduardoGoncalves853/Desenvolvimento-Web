// Teorema de pitágoras

const a2 = prompt(`digite para o cateto oposto`);
const b2 = prompt(`digite para o cateto adjescente`);
let h;

function Teorema(a, b) {
    return Math.pow(a, 2) + Math.pow(b, 2);;
}

function TirarRaíz(c2) {
    return Math.sqrt(c2);
}

const SomaDosCatetos = parseFloat(Teorema(a2, b2));
const hipotenusa = parseFloat(TirarRaíz(Teorema(a2, b2)));

alert(`
h^2 = a² + b²
h^2 = ${a2}² + ${b2}²
h^2 = √${SomaDosCatetos}
h =  ${hipotenusa}`)

