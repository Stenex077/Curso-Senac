var idosa = "x";

function jogar(celula){

    //ve se a celula esta vazia para escrever
    if(celula.innerHTML == ""){
        celula.innerHTML = idosa;

        if( idosa == "x"){
            idosa = "o";
            celula.style.backgroundColor = "purple";
        }else if( idosa == "o"){
            idosa = "u";
            celula.style.backgroundColor = "blue";
        }else if (idosa == "u"){
            idosa = "x";
            celula.style.backgroundColor = "darkgreen";
        }
    }

}
