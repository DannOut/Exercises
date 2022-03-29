//Escreva um código que imprima um quadrado de asteriscos onde:
//A quantidade de asteriscos por linha é o valor da variável n;
// e a quantidade de linhas também é o valor da variável n;

//você deve usar o comando console.log() para escrever os asteriscos. lembre-se que esse comando sempre adiciona uma quebra de linha após imprimir o valor que foi passado pra ele.
// OBS: a variável n já existe, você não precisa cria-la



function imprimaQuadradoAsterisco(n){



        for (var linha = 1; linha < n; linha++){ // precisa começar em 1 já que a contagem lógica vai de 0 a 9
            var linhaAsterisco = "";  // espaçamento entre as linhas para fomar o quadrado perfeito

            for (var coluna = 0; coluna < n; coluna++){ // pode começar em 0, já que está utilizando o valor da linhaAteristico
                linhaAsterisco = linhaAsterisco + "  *";


            }

            console.log(linhaAsterisco);


            
        }

        return (linhaAsterisco);
    }

    console.log (imprimaQuadradoAsterisco(5) ); // verificar o por que está imprimindo contando o 0






