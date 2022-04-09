//exercicio 18

array = [1, -2, 4, -5, -7, 8, 7, 4, -5];
function arrayPosNeg() {
  arrayNegativo = [];
  arrayPositivo = [];

  for (var index = 0; index < array.length; index += 1) {
    if (array[index] < 0) {
      arrayNegativo.push = array[index];
      console.log(`Valor negativo ${arrayNegativo}`, array[index]);
    } else if (array[index] > 0) {
      arrayPositivo.push = array[index];
      console.log(`Valor positivo ${arrayPositivo}`, array[index]);
    }
    console.log(arrayNegativo);
    console.log(arrayPositivo);
  }

  return arrayPosNeg;
}

console.log(arrayPosNeg());
