// software para verificar quantas vezes uma letra aparece em determinada frase

function vezesLetraAparece(frase,letra){
        var contador = 0;

            for (var index = 0; index<frase.length;index++){
                if(frase[index] === letra){
                contador ++;

                } else {};

            }

        return contador;

     
    }       


    console.log(vezesLetraAparece("abacate testa teste", "t"));



