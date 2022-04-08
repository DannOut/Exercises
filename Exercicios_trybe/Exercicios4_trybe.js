//Exercício 4
let numbers = [4, 3, 1, 5, 6, 7, 34];

let lowerNumber = numbers[0]; // atribui lowerNumber ao primeiro valor do array

for (let index = 1; index < numbers.length; index++) {
  // estrutura de repetição para percorrer todo o array
  if (numbers[index] < lowerNumber) {
    /* estrutura if/else se o numero na posição 1 (pois o valor 0 já está atribuido
        ao lowerNumber) for menor que o lowerNumber, atribui o novo valor ao lowerNumber*/
    lowerNumber = numbers[index];
  }
}
console.log(lowerNumber);
