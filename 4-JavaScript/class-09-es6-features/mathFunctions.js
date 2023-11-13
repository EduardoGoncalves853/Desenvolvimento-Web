// File a ser inportado para o "1-es6-modules.js"

export function sum(num1, num2) {
    return num1 + num2;
  }

  function sub(num1, num2) {
    return num1 - num2;
  }
  
  function mul(num1, num2) {
    return num1 * num2;
  }
  
  function div(num1, num2) {
    return num1 / num2;
  }

export const MathOperation = {
    sum,
    sub,
    mul,
    div,
  };

  