window.addEventListener("load", ()=>{
   console.log("Antes da Promise")
   const igorBaio = fetch("https://api.github.com/users/IgorBaio")
      .then((res)=>{
         res.json().then(data => {
            showData(data);
            })
      }).catch(error =>{
         console.log("Erro na requisição")
      });
   console.log("Depois da Promise")

   console.log(divisionPromise(10,2));
   console.log(divisionPromise(5,0));
   divisionPromise(12,6).then(result => {
      console.log(result);
   });
   divisionPromise(12,0).then(result => {
      console.log(result);
   }).catch(erroMessage =>{
      console.log("Falha na divisão "+erroMessage);
   });
})

function showData(data){
   const user = document.querySelector("#user");
   user.textContent = data.login+' '+data.html_url;
}

function divisionPromise(a,b){
   return new Promise((resolve, reject)=>{
      if (b===0){
         reject('Não é possível dividir por zero');
      }else{
         resolve(a / b);
      }
   })
}