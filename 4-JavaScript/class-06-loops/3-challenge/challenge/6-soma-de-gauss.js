function somaDeGauss(n) {
    return (n * (n + 1)) / 2;
}

// Exemplo de uso
const n = 2; // substitua por qualquer número natural que desejar
const soma = somaDeGauss(n);
document.write(`A soma do número n com seus antecessores á ${n} tem a soma ${soma}.`);
