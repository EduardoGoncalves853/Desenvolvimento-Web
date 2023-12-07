// se junior bebe mais de 400 ml de café por dia
//todo  Dia produtivo
//! else vira joão pedro, ou seja, desempregado, fudido e lascado

// se junior e seu professor bebem café juntos,
// e que a soma dos cafés dá mais de 750ml
//todo então ambos tem seu dia produtivo
//! else ambos perdem pois não conseguer aprender mútuamente

//? mas se apenas um passar sua meta?
//! else ambos perdem pois não conseguer aprender mútuamente


//todo 1


var junior = prompt(`Digite o quanto de "ml" junior vai tomar de café`);

if (junior >= 400) {
    alert(`Dia produtivo`);
} else {
    alert(`João pedro, ou seja, desempregado, fudido e lascado
    e preguiçoso, João pedro solta os minino`);
}

//todo 2


var JuniorProfessor = prompt(
    `Digite o quanto de café em "ml" 
    junior e seu professor 
    vão tomar de café`);
    
var junProf = JuniorProfessor;

if (junProf >= 750) {
    alert(`Ambos tem seu dia produtivo`);
} else {
    alert(`Ambos perdem pois não conseguem aprender mútuamente`);
}