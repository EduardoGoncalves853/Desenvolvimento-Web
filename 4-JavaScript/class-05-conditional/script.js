const userAge = 15

if (userAge >= 18 && userAge <= 70) {
  console.log("Voto obrigatório");
} else {
    console.log("Voto Facultativo");
}
  

if (userAge >= 16){
    if (userAge <= 18 && userAge <= 70) {
        console.log("Voto obrigatório");
    } else {
        console.log("Voto facultativo");
    }
} else {
    console.log("Não pode votar");
}

// se a idade do usuário for menor ou igual a 16 e menor que 18, o voto será facultativo

    if (userAge <=16 && userAge < 18) {
        console.log("Facultativo")

// se não for. Ou seja, maior ou igual a 18 e menor ou igual a 70, o voto será Obrigatório

    } else if(userAge <= 18 && userAge >= 70) {
        console.log("Obrigatótio");
    } else if(userAge < 16) {
        console.log("Não pode votar");
    }