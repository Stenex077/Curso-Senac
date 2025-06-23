alert("olá mundo");
//Variavel quae guarda algo temporariamente
var nome = "Robertão";
var idade = 35 ;
var senha= "1234";

//ALTERADO NO GIT HUB

//Estrutura de Condição
if(idade > 17){
   alert("pode votar! "+ nome);
} else{
    alert("Jacaré vai pra casa!!! "+ nome);
}
if(nome == "Robertão" && senha == "123"){
    alert("login concedido");
} else{
    alert("Tente novamente Muchacho!!!");
}

//Laço de repetição
contador = 0;
while(contador < 1000){
    contador = contador + 1;
    console.log(contador);
}

var celular = document.querySelector(".celular"); // icone do menu
var listaMenu = document.querySelector(".menu ul"); // itens do menu

celular.addEventListener("click" , function(){
  listaMenu.classList.toggle("mostrarMenu"); 
});