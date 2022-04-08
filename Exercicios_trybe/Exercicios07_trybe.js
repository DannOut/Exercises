// Exercicio 7

function calc(numero1, numero2) {
  let multi = numero1 * numero2;
  console.log("Resultado de:", numero1, "*", numero2, "é", multi);

  let div = numero1 / numero2;
  console.log("Resultado de:", numero1, "/", numero2, "é", div);

  return calc;
}

console.log(calc(10, 5));
