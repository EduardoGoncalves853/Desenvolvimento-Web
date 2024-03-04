//fazemos uma função para retornar
//? ("Running...") ==> Running...

function runAplication() {
    return("Running...");
}

//? catch => "pegar"
//? fnally => "finalmente"


try {
    document.write(runAplicationaaaaaa());
    //* try => tenta uma Function com o nome errado
} catch(error) {
    console.log(error);
    //* catch => para capturar o error
} finally {
    console.log("Sempre será executado!");
    //* finally => executa caso exista um error
}

//* Se não houve erros, document.write executa
document.write("Aplication is live..");

function divideNumbers(num1, num2) {
   //* se num 2 for igual a 0
    if (num2 === 0) throw new Error("Não é possível dividir por 0 abestado!");
   //* lança um novo Error("Não é possivel...")
    return num1 / num2;
}

console.log(divideNumbers(4, 3));