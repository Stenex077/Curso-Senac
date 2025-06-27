var idosa = "x";

function jogar(celula){

    //ve se a celula esta vazia para escrever
    if(celula.innerHTML == ""){
        celula.innerHTML = idosa;

        if( idosa == "x"){
            idosa = "o";
            celula.style.backgroundColor = "darkred";
        }else{
            idosa = "x"
         celula.style.backgroundColor = "darkblue"
       }

} 

function reiniciar(){
    window.location.reload();
}
}
