let form = document.getElementById('form');
let card = document.querySelector('card');

let tituloCard = document.querySelector("#entrada1");
let imagem = document.querySelector("#entrada2");
let texto = document.querySelector("#entrada3");

//criando cards
form.addEventListener("submit",function(e){
  e.preventDefault(); 
  
  let cartao = document.createElement('div');
  cartao.classList.add("cartao");

  let titulo = document.createElement("h2");
  titulo.classList.add("titulo-cartao");
  titulo.innerText = tituloCard.value;
  cartao.appendChild(titulo);

  let img = document.createElement("img");
  img.classList.add("img-cartao");
  img.src = imagem.value;
  cartao.appendChild(img);

  let txt = document.createElement("p");
  txt.classList.add("txt-cartao");
  txt.innerText = texto.value;
  cartao.appendChild(txt);
  
  let newCard = document.querySelector(".listaCard");
  newCard.appendChild(cartao);

  form.reset();
  formulario.style.display = "none";     
        
       
}); 




