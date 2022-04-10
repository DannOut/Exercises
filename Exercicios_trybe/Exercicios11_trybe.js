let array = [3, 5, 60, 13, 15, 24, 25];

function divisible5() {
  let resultado = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 5 == 0) {
      resultado[index] = (array[index]);
      console.log(`O numero ${array[index]} é divisivel por 5 !`);
      console.log ("O Valor",array[index], "Foi adicionado ao Array \n");  
    } else console.log(`O numero ${array[index]} não é divisivel por 5 !\n`);
  }
  
  return divisible5;
}
console.log(divisible5());
