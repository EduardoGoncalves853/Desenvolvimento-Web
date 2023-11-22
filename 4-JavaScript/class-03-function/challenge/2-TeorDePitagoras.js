const a2 = prompt(`digite para o cateto oposto`)
alert(`seu cateto oposto é ${a2}`)
const b2 = prompt(`digite para o cateto adjescente`)
alert(`seu cateto adjascente é ${b2}`)
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

