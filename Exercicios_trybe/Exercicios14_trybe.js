//Exericicio 14

var array = [4, -9, 2, -5, 5, -4, 3, -3];

function posNeg() {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0) {
      let resultado = [];
      resultado.push = array[index];
      console.log(`O numero ${array[index]} é negativo`);
    } else if (array[index] >= 0) {
      let resultado = [];
      resultado.push = array[index];
      console.log(`O numero ${array[index]} é positivo`);
    }
  }
  return posNeg;
}

console.log(posNeg());
