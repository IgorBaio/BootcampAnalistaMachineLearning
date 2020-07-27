window.addEventListener("load",()=>{
  
   console.log(transform([10,20,30,40,50]))
   const input2 = [2,4,6,8,10,12,14,16,18,20]
   const output2 = [2,4,6,10,14,18]
   getPositionsPars(input2)
   console.log(test4());
   console.log(test6());

})

const  getPositionsPars = (input) =>{
   let output = []
   let itemOfNumber  = Array.from(input)
   
   output.push(itemOfNumber.filter(item=>{
      if((item / 2 >= 2 && (item / 2) %2 === 0) ){

         let position = item / 2 
          output.push(itemOfNumber[position])
      }
      if(item === 2){
         output.push(item)
      }
   }
   ))
   console.log("output: "+output);
}

function test4(){
   const array = [{name:"Ralph"},{name:"Igor"},{name:"Thais"},{name:"Fran"}]

   array.forEach((i,index)=>{
      i = {...i,j:i.name.length};
      array[index]= i;
   })

   return array;
}

function test6(){
   const array = ["Luke", "Han Solo","Darth Vader"]

   return array.sort((a,b)=>b.lenght-a.length);
}


const transform = (array) =>{
   let newArray = []
   
   array.map(item => {
      return newArray.push((item/10)+1);
   });
   
   return newArray;
}