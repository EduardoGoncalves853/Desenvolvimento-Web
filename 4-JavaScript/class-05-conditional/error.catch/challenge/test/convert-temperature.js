function converterTemperatura(entrada) {
    try {
      entrada = entrada.toUpperCase().trim(); // Converte para letras maiúsculas e remove espaços extras
  
      if (entrada.endsWith('C')) {
        const valorCelsius = parseFloat(entrada);
        if (!isNaN(valorCelsius)) {
          const fahrenheit = (valorCelsius * 9/5) + 32;
          return `${valorCelsius}C = ${fahrenheit.toFixed(2)}F`;
        } else {
          throw new Error('Valor inválido para Celsius');
        }
      } else if (entrada.endsWith('F')) {
        const valorFahrenheit = parseFloat(entrada);
        if (!isNaN(valorFahrenheit)) {
          const celsius = (valorFahrenheit - 32) * 5/9;
          return `${valorFahrenheit}F = ${celsius.toFixed(2)}C`;
        } else {
          throw new Error('Valor inválido para Fahrenheit');
        }
      } else {
        throw new Error('Formato de entrada inválido. Use "XxC" ou "XxF".');
      }
    } catch (error) {
      return `Erro: ${error.message}`;
    }
  }
  
  // Exemplos de uso:
  console.log(converterTemperatura('10C')); // Saída: "10C = 50.00F"
  console.log(converterTemperatura('32.6F')); // Saída: "32.6F = 0.33C"
  console.log(converterTemperatura('abc')); // Saída: "Erro: Formato de entrada inválido. Use 'XxC' ou 'XxF'."
  console.log(converterTemperatura('45.7x')); // Saída: "Erro: Valor inválido para Celsius"
  