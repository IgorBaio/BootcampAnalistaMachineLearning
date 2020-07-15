window.addEventListener("load", start);

function start(){
   console.log("Pagina totalmente carregada")
   
   var nameInput = document.querySelector("#nameInput");
   nameInput.addEventListener("keyup", countName);
   
   var form = document.querySelector("form");
   form.addEventListener("submit", preventSubmit);

}

function countName(event){
   var count = event.target.value.length
   var span = document.querySelector("#nameLength");
   span.textContent = "Tamanho do nome: "+count
}

function preventSubmit(event){
   event.preventDefault();

   var nameInput = document.querySelector("#nameInput");
   alert(nameInput.value+' cadastrado com sucesso')

}