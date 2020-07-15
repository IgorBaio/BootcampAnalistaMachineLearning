console.log("Oi");

var title = document.querySelector("h1");

title.textContent = "Mudei o texto";

var city = document.querySelector(".city");
city.textContent = "JF"

var data = document.querySelectorAll(".data");
console.log(data)

data = Array.from(data);
console.log(data)

for(var i = 0; i<data.length; i++){
   var currentElement = data[i];
   // currentElement.style.color = "green"
   //por boas praticas utiliza-se o codigo abaixo
   currentElement.classList.add('emphasis')
}
