//Exercício 2
let idade;
function verificadorIdade(idade) {
  if (idade <= 15) {
    console.log("Não pode votar");
  } else if ((idade >= 18) && (idade <= 69)) {
    console.log("Voto obrigatório");
  } else if ((idade = 16) || (idade = 17) || idade >= 70) {
    console.log("Voto facultativo");
  } else return;
}
verificadorIdade(12);
verificadorIdade(20);
verificadorIdade(17);
verificadorIdade(16);
verificadorIdade(70);
verificadorIdade(69);
