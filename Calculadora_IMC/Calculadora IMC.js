function calculoIMC(altura, peso) {
  var imc = 0;

  imc = peso / altura ** 2;

  return imc;
}

console.log(calculoIMC(1.72, 90));
