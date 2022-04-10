let idade = [32, 5, 8, 10, 15, 18, 22, 30, 40, 15, 10, "jailson"];

function verificadorMaioridade() {
  for (let index = 0; index < idade.length; index++) {
    if (idade[index] >= 18) {
      let maior = [];
      maior = idade[index];
      console.log("MAIORIDADE", maior);
    } else if (idade[index] < 18) {
      let menor = [];
      menor = idade[index];
      console.log("MENORIDADE", menor);
    } else console.log("IDADE INCORRETA");
  }

  return verificadorMaioridade;
}
console.log(verificadorMaioridade());
