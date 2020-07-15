window.addEventListener("load", start);

var globalNames = ['a','b','c','d','e'];
var inputName = null;
var isEditing = false;
var currentIndex = null;

function start(){
   preventFormSubmit();

   inputName = document.querySelector("#nameInput");
   activateInput();

   render();

}

function preventFormSubmit(){
   function handleFormSubmit(event){
      event.preventDefault();
   }

   var form = document.querySelector('form');
   form.addEventListener("submit",handleFormSubmit)
}

function activateInput(){

   function insertName(newName){
      var typedName = newName;
      console.log(globalNames.length)
      console.log(globalNames[globalNames.length-1])
      globalNames.push(newName)
      clearInput();
      console.log(globalNames)
   }

   function updateName(newName){
      globalNames[index] = newName;

   }

   function handleTyping(event){

      var hasText = !!event.target.value && event.target.value.trim() !== '';

      if(!hasText){
         clearInput();
         return ;
      }

      if(event.key == "Enter"){
         if(isEditing){
            updateName(event.target.value);
         }else{
            console.log('inse')
            insertName(event.target.value)
         }
         isEditing = false;
         clearInput();
         render();
      }
   }
   inputName.focus();
   inputName.addEventListener("keyup", handleTyping);
}

function render(){
   function createDeleteButton(index){
      function deleteName(){
         console.log(index)
         globalNames.splice(index,1);
         render();
      }
      console.log("aq")
      var button = document.createElement("button");
      button.classList.add("deleteButton");
      button.textContent = "X";

      button.addEventListener("click", deleteName);

      return button;
   }

   function createSpan(name, index){
      function editItem(){
         inputName.value = name;
         inputName.focus();
         isEditing=true;
         currentIndex = index
      }
      var span = document.createElement("span");
      span.classList.add("clickable")
      span.textContent = name;
      span.addEventListener("click", editItem);

      return span;
   }

   var divNames = document.querySelector("#names");
   divNames.innerHTML = '';

   var ul = document.createElement("ul");
   for(var i = 0; i < globalNames.length;i++){
      var currentName = globalNames[i];
      var li = document.createElement("li");

      var button = createDeleteButton(i);

      var span = createSpan(currentName, i)

      li.appendChild(button);
      li.appendChild(span);

      ul.appendChild(li);
   }
   divNames.appendChild(ul);
}
function clearInput(){
   inputName.value = '';
   inputName.focus();
}