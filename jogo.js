var idosa = "x";

function jogar(celula){

    //ve se a celula esta vazia para escrever
    if(celula.innerHTML == ""){
        celula.innerHTML = idosa;

        if( idosa == "x"){
            idosa = "o";
<<<<<<< HEAD:projeto-2/jogo.js
            celula.style.backgroundColor = "darkred";
        }else{
            idosa = "x"
         celula.style.backgroundColor = "darkblue"
       }
=======
            celula.style.backgroundColor = "purple";
        }else{
            idosa = "x";
            celula.style.backgroundColor = "blue";
        
>>>>>>> dcb056c6519c47ee0513a445200ef161ecc1324a:jogo.js
    }

} 

function reiniciar(){
    window.location.reload();
}
}
