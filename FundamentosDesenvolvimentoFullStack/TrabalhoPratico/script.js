window.addEventListener("load",()=>{
   console.log(getGroupMembers());
   console.log(getFullName("Igor"));
   console.log(getFullName("Igor","Baio"));
   console.log(getFullName("Igor","Baio","Soares"));
   console.log(onlyNumbersFrom("989087ji097 .1341-"))
   console.log(transform([10,20,30,40]))
   console.log(transform([61,72,83,94]))
})

const getGroupMembers = () =>{
   return ["Homero Lucas do Prado","Igor Baio",  "Renato Machado Filho", "Stefaneo Ribeiro", "Vinícius da Silva Coelho"];
}

const getFullName = (...args) =>{
   return args.join(" ");
}

const onlyNumbersFrom  = (number) =>{
   let itemOfNumber  = Array.from(number)
   itemOfNumber = itemOfNumber.filter(item=> parseInt(item))
   itemOfNumber = itemOfNumber.join("");

   return itemOfNumber;
}

const transform = (array) =>{
   let newArray = []
   
   array.map(item => {
      return newArray.push((item/10)+1);
   });
   
   return newArray;
}