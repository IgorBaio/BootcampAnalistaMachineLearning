import 'dart:html';
import 'dart:convert';
/*
class Cliente {
  int id;
  String nome;

  String get nomeComTratamento {
    return "Sr. ${nome}";
  }
}
*/

class Conta{
  int id;
  int agencia;
  int conta;
  String name;
  int balance;
}


void main(List<String> args) async{
  /*
  var cliente = new Cliente();
  cliente.id = 10;
  cliente.nome = "Igor";
  print(cliente.nome);
  print(cliente.nomeComTratamento);
  */

  /*
  var list = [1, 2, 3, 4];
  print(list.length);
  list.remove(3);
  print(list);
  print(list[2]);
  list.add(3);
  print(list);
  list.removeAt(2);
  print(list);

  var list2 = [1, 2, 3, 4, "teste"];
  list2.add(10);
  print(list2[4]);
  print(list2);
  */
  
  /*
  var mapa = {
    "id":"10",
    "nome": "Igor",
  };
  print(mapa['id']);
  print(mapa.containsKey("id"));
  print(mapa.containsValue("10"));
  */
  
  /*HttpRequest.getString('https://jsonplaceholder.typicode.com/todos/1')
    .then(print);
  print(await HttpRequest.getString('https://jsonplaceholder.typicode.com/todos/2'));
  */
  
  /*
  try{
      dividir(10,0);
  } on IntegerDivisionByZeroException{
    print("Divisão por zero");
  }
  
  
  try{
      dividir(10,0);
  } catch(e){
    print("Exceção desconhecida");
  }finally{
    print("Sempre Executo");
    
  }
  
  try{
      print(dividir(10,4));
  } catch(e){
    print("Exceção desconhecida");
  }finally{
    print("Sempre Executo");
    
  }*/
  /*
  var result = await HttpRequest.getString('https://jsonplaceholder.typicode.com/todos');
  var todos = jsonDecode(result);
  print(result);
  print("---------------------------------------------------");
  print(todos);
  
  
  for(int i = 0; i < todos.length;i++){
    print(todos[i]);
  }
  */
  
  var result = await HttpRequest.getString('http://localhost:3090/api/accounts');
  List<Conta> contas = new List();
  var contasJson = jsonDecode(result);
  for(int i = 0; i< contasJson.length;i++){
    var conta = new Conta();
    conta.id = contasJson[i]["id"];
    conta.agencia = contasJson[i]["agencia"];
    conta.name = contasJson[i]["name"];
    conta.balance = contasJson[i]["balance"];
    contas.add(conta);
  }
  //print("${contas[0].balance}\n");
  
  var contasAgencia33 = contas.where((item)=>item.agencia==33).toList();
  /*for(int i = 0; i<contasAgencia33.length;i++){
    print(contasAgencia33[i].name);
  }*/
  /*
  contasAgencia33.forEach((conta)=>print(conta.name));
  print("\n");
  
  var nomesAgencia33 = contasAgencia33.map((conta)=>conta.name);
  nomesAgencia33.forEach((name)=>print(name));
  
  print("\n");
  contasAgencia33.sort((conta1,conta2)=>conta1.balance-conta2.balance); 
  var balancesAgencia33 = contasAgencia33.map((conta)=>conta.balance);
  balancesAgencia33.forEach((balance)=>print(balance));
  
  print("\n");
  print(contasAgencia33.every((conta)=>conta.agencia == 33));
  print(contas.every((conta)=>conta.agencia == 33));
  */
  
  //var primeiraConta33 = contas.firstWhere((item)=>item.agencia==33);
  //print(primeiraConta33.name);
  
  
  contasAgencia33.take(5).toList().forEach((conta)=>print(conta.name));
  print('\n');
  contasAgencia33.skip(2).take(5).toList().forEach((conta)=>print(conta.name));
}

/*
dividir(int valor1, int valor2){
  if(valor2 == 0){
    throw new IntegerDivisionByZeroException();
  }else{
    return valor1/valor2;
  }
}*/