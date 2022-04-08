//Exericicio 12


function trasPraFrente (frase){
 let palavra = ""; // atribuindo uma string texto á variavel palavra
 for (var index = frase.length - 1; index >= 0; index --){ /* enquanto index que é frase.lenght - 1 (para pegar ultimo valor do array)
 for menor que 0 (primeiro valor do array), faça decremento de 1 até chegar a 0  */ 
 palavra += frase[index]; // palavra vai fazer um incremento da frase na posição index, que é o ultimo valor do array
 }
 return palavra; //retorna a palavra de trás pra frente na variavel palavra
        
}
console.log (trasPraFrente("daniel")); // printa a variavel palavra
