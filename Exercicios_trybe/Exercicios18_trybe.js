//exercicio 18

array = [1, -2, 4, -5, -7, 8, 7, 4, -5];
function arrayPosNeg() {
  arrayNegativo = [];
  arrayPositivo = [];

  for (var index = 0; index < array.length; index += 1) {
    if (array[index] < 0) {
      arrayNegativo[index] = array[index];
      arrayNegativo = arrayNegativo.filter(Number);
      console.log(`Valores negativos: ${arrayNegativo}`);
    } else if (array[index] > 0) {
      arrayPositivo[index] = array[index];
      arrayPositivo = arrayPositivo.filter(Number);
      console.log(`Valores positivos: ${arrayPositivo}`);
    }

  }

  return arrayPosNeg;
}

console.log(arrayPosNeg());
console.log (arrayNegativo);
console.log (arrayPositivo);
