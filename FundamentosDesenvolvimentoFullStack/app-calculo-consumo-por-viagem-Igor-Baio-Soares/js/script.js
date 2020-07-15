class Veiculo{
   constructor(cor,marca,modelo,gasolinaRestante, consumo){
      this.cor = cor;
      this.marca = marca;
      this.modelo = modelo;
      this.gasolinaRestante = gasolinaRestante;
      this.consumo = consumo;
   }

   get getCor(){
      return this.cor;
   }

   get getMarca(){
      return this.marca;
   }

   get getGasolinaRestante(){
      return this.gasolinaRestante;
   }

   get getConsumo(){
      return this.consumo;
   }

   set setConsumo(consumo){
      return this.consumo = consumo;
   }

   set setCor(cor){
      return this.cor = cor;
   }

   set setMarca(item){
      return this.marca = marca;
   }

   set setGasolinaRestante(valorAcrescentar){
      return this.gasolinaRestante += valorAcrescentar;
   }
}




function executeProgram(){
   var veiculoAndar = document.querySelector("#estimar");
   veiculoAndar.addEventListener("click", function(){
      
      var marca = document.querySelector("#marca");
      var modelo = document.querySelector("#modelo");
      var cor = document.querySelector("#cor");
      var consumo = parseFloat(document.querySelector("#consumo").value);
      var gasolinaRestante = parseFloat( document.querySelector("#combustivel").value);


      console.log(marca)
      console.log(modelo)
      console.log(cor)
      console.log(consumo)
      console.log(gasolinaRestante)


      var atributosVeiculo = [marca.value, modelo,cor,consumo,gasolinaRestante];

      var km = parseFloat(document.querySelector("#km").value);
      var veiculo = new Veiculo(atributosVeiculo[2],atributosVeiculo[0],atributosVeiculo[1],atributosVeiculo[4],atributosVeiculo[3]);
      console.log(veiculo)
      var msg = estimar(km, veiculo);

      var span = document.createElement("span");
      span.innerHTML = msg;

      verifyValue(span, veiculo);

      render(span);

   });


}

const verifyValue = (span,veiculo) =>{
    if(veiculo.getGasolinaRestante < 0){
       span.classList.add("travelPaused");
    }else if(veiculo.getGasolinaRestante === 0){
      span.classList.add("travelAlert");
    }else{
       span.classList.add("directTrip");
    }

}

const render = (child) =>{
   var msg = document.querySelector("#msg");
   if(msg.childNodes.length > 0){
      msg.removeChild(msg.firstChild);
      msg.appendChild(child)
   }else{
      msg.appendChild(child)
   }
}

   

const estimar = (km,veiculo) =>{
   var msg = '';
   veiculo.setGasolinaRestante = -(km/veiculo.getConsumo);
   if(veiculo.getGasolinaRestante < 0){
      var falta = -(veiculo.getGasolinaRestante)
      msg = `Vai precisar abastecer no caminho, vai faltar em média ${falta} Km/L`;
   }else if(veiculo.getGasolinaRestante === 0){
      msg = `Vai precisar abastecer no caminho, senão vai ficar em média com ${veiculo.getGasolinaRestante} Km/L ao chegar`;
   }else{
      msg = `O trajeto vai ser concluído em média com ${(veiculo.getGasolinaRestante)} Km/L de sobra`;
   }
   return msg;
}


executeProgram();