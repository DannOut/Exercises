// Exercicio 15

function conditions(number1, number2) {
  if (number1 > number2) {
    console.log("O primeiro número é maior");
  } else if (number1 < number2) {
    console.log("O segundo número é maior");
  } else if ((number1 = number2)) {
    console.log("Números iguais");
  }

  return conditions;
}

console.log(conditions(10, 10));
console.log(conditions(10, 5));
console.log(conditions(5, 10));
