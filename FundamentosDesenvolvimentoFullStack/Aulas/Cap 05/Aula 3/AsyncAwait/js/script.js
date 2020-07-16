window.addEventListener("load", async ()=>{
   console.log("Antes da Promise")
   
   const data = await doFetch();

   showData(data);
   console.log(data.login);
   console.log("Depois da Promise")

   divisionPromise(10,2);
   
})

async function doFetch(){
   const igorBaio = await fetch("https://api.github.com/users/IgorBaio");
   console.log(igorBaio)
   const data = await igorBaio.json();
   console.log(data);
   return data;
}

function showData(data){
   const user = document.querySelector("#user");
   user.textContent = data.login+' '+data.html_url;;
}

async function divisionPromise(a,b){
   const division = await new Promise((resolve, reject)=>{
      if (b===0){
         reject('Não é possível dividir por zero');
      }else{
         resolve(a / b);
      }
   });

   console.log(division);
}