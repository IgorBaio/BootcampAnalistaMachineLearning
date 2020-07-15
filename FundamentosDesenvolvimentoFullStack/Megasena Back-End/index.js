var express = require("express");
var cors = require("cors");

var app = express();
app.use(cors());

var lotteryNumbers = [];

function getRandomNumber(from, to){
   return Math.max(from, Math.ceil(Math.random()*to));
}

function getLotteryNumbers(){
   lotteryNumbers = [];
   while(lotteryNumbers.length < 6){
      var newNumber = getRandomNumber(1,60);
      var foundNumber = false;

      for(var i = 0; i < lotteryNumbers.length; i++){
         var currentNumber = lotteryNumbers[i];

         if(currentNumber === newNumber){
            foundNumber = true;
            break;
         }
      }

      if(!foundNumber){
         lotteryNumbers.push(newNumber);
      }
   }
   lotteryNumbers.sort(function(a,b){
      return a-b;
   });
   console.log(lotteryNumbers);
}

app.get("/", function(request, response){
   response.json({message:"Bem-vindo à API de números aleatórios da Megasena. Acesse /lottery para gerar um numero"
   })
});

app.get("/lottery", function(request, response){
   getLotteryNumbers();

   response.json({
      numbers: lotteryNumbers
   })
});

app.listen(3001, function(){
   console.log("Servidor iniciado na porta 3001");
});