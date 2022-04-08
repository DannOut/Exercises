//Exercicio 8

function nota(resultado) {
  if (resultado <= 10) {
    console.log("PÉSSIMO");
  } else if (resultado >= 11 && resultado <= 30) {
    console.log("RUIM");
  } else if (resultado >= 31 && resultado <= 50) {
    console.log("REGULAR");
  } else if (resultado >= 51 && resultado <= 70) {
    console.log("MEDIANO");
  } else if (resultado >= 71 && resultado <= 90) {
    console.log("ÓTIMO");
  } else if (resultado >= 91) {
    console.log("EXCELENTE");
  } else;

  return resultado;
  return nota;
}
console.log("Sua nota foi :", nota(10));
