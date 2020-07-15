window.addEventListener("load", ()=>{
   doMap();
   doFilter();
   doForEach();
   doReduce();
   doFind();
   doSome();
   doEvery();
   doSort();
});

function doMap(){
   const nameEmailArray = people.results.map(person => {
      return {
         name:person.name,
         email: person.email
      };
   });

   console.log(nameEmailArray)
   return nameEmailArray;
}

function doFilter(){
   const olderThan50 = people.results.filter(person => {
      return person.dob.age > 50;
   });

   console.log(olderThan50);
}

function doForEach(){
   const mappedPeople = doMap();
   mappedPeople.forEach(person => {
      person.nameSize = 
      person.name.title.length + 
      person.name.first.length + 
      person.name.last.length;
   });
}

function doReduce(){
   const totalAges = people
                  .results
                  .reduce((accumulator,current) => {
      return accumulator+current.dob.age;
   }, 0);

   console.log(totalAges);

   // let sum = 0;
   // for(let i = 0; i< people.results.length;i++){
   //    sum += people.results[i].dob.age;
   // }
   // console.log(sum);
}

function doFind(){
   const found = people.results.find(person => {
      return person.location.state === "Minas Gerais";
   });

   console.log(found);
}

function doSome(){
   const found = people.results.some(person => {
      return person.location.state === "Amazonas";
   });

   console.log(found);
}

function doEvery(){
   const every = people.results.every(person => {
      return person.nat === "BR";
   });

   console.log(every)
}

function doSort(){
   const mappedNames = people.results
   .map(person => person.name.first)
   .filter(person => person.startsWith("A"))
   .sort();

   console.log("Modo 1 - Ordenado alfabeticamente");
   console.log(mappedNames);

   const mappedNames2 = people.results
   .map(person => { 
      return {
         name:person.name.first
      }
   })
   .filter(person => person.name.startsWith("A"))
   .sort((a,b) => {
      return a.name.localeCompare(b.name);
   });

   console.log("Modo 2 - Ordenado alfabeticamente");
   console.log(mappedNames2);

   const mappedNamesLenght = people.results
   .map(person => person.name.first)
   .filter(person => person.startsWith("A"))
   .sort((a,b) => {
      return a.length-b.length;
   });

   console.log("Modo 3 - Ordenado por tamanho");
   console.log(mappedNamesLenght);

   const mappedNamesLenghtInverse = people.results
   .map(person => person.name.first)
   .filter(person => person.startsWith("A"))
   .sort((a,b) => {
      return b.length-a.length;
   });

   console.log("Modo 4 - Ordenado por tamanho inverso");
   console.log(mappedNamesLenghtInverse);
}