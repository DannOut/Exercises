// Exercicio 6

function ticTacToe(jogador1, jogador2) {
  if (
    (jogador1 == "pedra" && jogador2 == "tesoura") ||
    (jogador1 == "papel" && jogador2 == "pedra") ||
    (jogador1 == "tesoura" && jogador2 == "papel")
  ) {
    console.log("Jogador 1 ganhou !");
  } else if (
    (jogador2 == "pedra" && jogador1 == "tesoura") ||
    (jogador2 == "papel" && jogador1 == "pedra") ||
    (jogador2 == "tesoura" && jogador1 == "papel")
  ) {
    console.log("Jogador 2 ganhou !");
  } else if (
    (jogador2 == "pedra" && jogador1 == "pedra") ||
    (jogador2 == "papel" && jogador1 == "papel") ||
    (jogador2 == "tesoura" && jogador1 == "tesoura")
  ) {
    console.log("Empate !");
  } else console.log("Utilize apenas: pedra, papel ou tesoura !");

  return ticTacToe;
}

console.log(ticTacToe("pedra", "pedra"));
