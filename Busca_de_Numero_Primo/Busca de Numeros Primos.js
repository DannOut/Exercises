function buscaNumeroPrimos(n) {
  var numerosPrimos = [];

  for (var numeroAtual = 2; numeroAtual < n; numeroAtual++) {
    /* Como o n sempre vai ser maior que 2
             vamos começar por ele, uma vez que nenhum número é divisível por 0 e todos os números são divisíveis por 1. */

    var quantidadeDeDivisores = 0;
    for (var numeroMenor = 2; numeroMenor < numeroAtual; numeroMenor++) {
      if (numeroAtual % numeroMenor === 0) {
        quantidadeDeDivisores++;
      }
    }
    if (quantidadeDeDivisores === 0) {
      numerosPrimos.push(numeroAtual);
    }
  }
  return numerosPrimos;
}

console.log(buscaNumeroPrimos(100));
