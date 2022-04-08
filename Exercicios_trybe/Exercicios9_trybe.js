//exercicio 9
let teste = [4,5,15,3,2,7,18,8,12,13]


// falta criar a função para fazer funcionar
function maxNumber (){
var numero = teste[0];

// for para procurar o maior numero do array
  for (var index = 1; index < teste.length; index++) {
    if (teste[index] > numero) {
      numero = teste[index];
    }
  }
 console.log (`o maior numero do array é, ${numero} !`); // uma das formas de return com texto dentro da function

 return numero;
}

console.log (`o maior numero do array é: ${maxNumber()} !`); // retornando o texto + o resultado fora da function


console.log (maxNumber()); // retornando todo o console.log dentro da function + o return do resultado, no caso, numero


