//Exercício 1

let nota1, nota2;
function notaFinal(nota1, nota2) {
  let media = (nota1 + nota2) / 2;

  if (media == 10) {
    console.log("O aluno foi aprovado com mérito,", "a nota dele foi", media);
  } else if (media < 7) {
    console.log("O aluno foi reprovado,", "a nota dele foi", media);
  } else if (media >= 7) {
    console.log("O aluno foi aprovado,", "a nota dele foi", media);
  }
  console.log("_____________________________");
  console.log("A nota da primeira avaliação foi", "", nota1);
  console.log("A nota da segunda avaliação foi", "", nota2);
  console.log("A média da do aluno foi", "", media);
}

notaFinal(10, 10);
