/*
   declara uma variável 
   let nota1 = 9.5
   var cidade = "Sorocaba"
   const primeiroCliente = "Jaquiel "
*/




let circulo = document.querySelector(".circulo")
let imagem  = document.querySelector(".starbucks")

function trocarCor(cor){
 
   circulo.style.background = cor;

}
function trocarImagem(img){
    imagem.src = img
}  