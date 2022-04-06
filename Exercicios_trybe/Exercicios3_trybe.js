//Exercicio 3

let nome, sobrenome, idade, cidadeNatal;

function concatenacao(nome, sobrenome, idade, cidadeNatal) {
  console.log(
    "Bom dia, meu nome é :",
    "",
    nome + "" + sobrenome,
    "\n",
    "Atualmente, tenho:",
    "",
    idade,
    "",
    "anos",
    "\n",
    "Minha cidade natal é:",
    "",
    cidadeNatal
  );

  return concatenacao;
}
console.log(concatenacao("Daniel", "Outeiro", 29, "Rio de Janeiro"));
