//Exercício 4

function getLowerNumber(numbers) {
  let lowerNumber = numbers[0]; // atribui maxNumber ao primeiro valor do array

  for (let index = 1; index < numbers.length; index++) {
    // estrutura de repetição para percorrer todo o array
    if (numbers[index] < lowerNumber) {
      /* estrutura if/else se o numero na posição 1 (pois o valor 0 já está atribuido
        ao lowerNumber) for menor que o lowerNumber, atribui o novo valor ao lowerNumber*/
      lowerNumber = numbers[index];
    }
  }
  return lowerNumber; // retorna o valor o lowerNumber com o menor valor atribuido
}

// Reaplicando o conceito no código abaixo

function pegarMenorNumero(numero) {
  let pegarMenorNumero = numero[0];
  for (let row = 1; row < numero.length; row++) {
    if (numero[row] < pegarMenorNumero) {
      pegarMenorNumero = numero[row];
    }
  }

  return pegarMenorNumero;
}
