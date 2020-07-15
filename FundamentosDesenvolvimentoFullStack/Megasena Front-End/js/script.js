function start(){
   var spanMegasena = document.querySelector("#megasena");

   fetch("http://localhost:3001/lottery").then(function(resource){
      resource.json().then(function(json){
         spanMegasena.textContent = json.numbers;
      });
   });

}

start();