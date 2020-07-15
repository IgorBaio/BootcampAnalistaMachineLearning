window.addEventListener("load", ()=>{
   doSpread();
   doRest();
   doDestructuring();
});

function doSpread(){
   const marriedMen = people.results
   .filter(person => person.name.title === "Mr");
   const marriedWomen = people.results
   .filter(person => person.name.title === "Ms");

   console.log(marriedMen);
   console.log(marriedWomen);

   const marriedPeople = [...marriedMen, ...marriedWomen, {msg:'Olá'}]
   console.log(marriedPeople);
}

function doRest(){
   console.log(infiniteSum(1,2));
   console.log(infiniteSum(1,2,1000));
   console.log(infiniteSum(1,2,1000,1,2,23,2,455,5,5));
}

function infiniteSum(...numbers){
   return numbers.reduce((acc,curr) => acc + curr, 0);
}

function doDestructuring(){
   const first = people.results[0];
   
   //Repetitivo
   //const username = first.login.username;
   //const password = first.login.password;

   //Usando Destructuring
   const {username, password} = first.login;
   console.log(`username: ${username}\npassword: ${password} `)


}