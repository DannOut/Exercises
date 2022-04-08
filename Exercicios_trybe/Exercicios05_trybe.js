//Exercicio 5
function calc(somar) {
  for (var numeroInicial = 1; numeroInicial < somar; numeroInicial++) {
    var resultado = 0;
    resultado = numeroInicial + 1; 
      
    console.log( // printando o resultado
      "a soma de",
      "",
      1,
      "",
      "+",
      "",
      numeroInicial,
      "é",
      "",
      resultado
    );
  }

  return somar;
}
console.log("Foi calculado toda a soma até o valor:", calc(10));


