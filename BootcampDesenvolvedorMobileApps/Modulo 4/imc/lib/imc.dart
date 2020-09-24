import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Imc extends StatefulWidget {
  @override
  _ImcState createState() => _ImcState();
}

class _ImcState extends State<Imc> {
  final TextEditingController _alturaController = TextEditingController();
  final TextEditingController _massaController = TextEditingController();
  final key = GlobalKey<ScaffoldState>();
  var _resultado = "";
  var _situacao = '';

  _onItemTapped(int index){
    if(index == 0){
      _alturaController.clear();
      _massaController.clear();
      setState(() {
        _resultado = "";
        _situacao = '';
      });
    }else if(_alturaController.text.isEmpty || _massaController.text.isEmpty){
      key.currentState.showSnackBar(
          SnackBar(
            content: Text("Altura e Massa são obrigatórios"),));
    }else{
      var massa = double.parse(_massaController.text.replaceAll(",", "."));
      var altura = double.parse(_alturaController.text.replaceAll(",", "."));
      var imc = massa / (altura*altura);
      setState(() {
        _resultado = "Seu IMC é ${imc.toStringAsFixed(2)}";
        if(imc < 17){
          _situacao = "Muito abaixo do peso";
        }else if(imc >= 17 && imc < 18.5){
          _situacao = "Abaixo do peso";
        }else if(imc >= 18.5 && imc < 25){
          _situacao = "Peso normal";
        }else if(imc >= 25 && imc < 30){
          _situacao = "Acima do peso";
        }else if(imc >= 30 && imc < 35){
          _situacao = "Obesidade I";
        }else if(imc >= 35 && imc < 40){
          _situacao = "Obesidade II (severa)";
        }else {
          _situacao = "Obesidade III (mórbida)";
        }
      });
      debugPrint(imc.toStringAsFixed(2));
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: key,
      appBar: AppBar(
        centerTitle: true,
        title: Text("Cálculo de IMC"),
        backgroundColor: Colors.blueAccent,
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          Image.asset("assets/img/balanca.png",width: 90),
          TextField(
            controller: _alturaController,
            keyboardType: TextInputType.numberWithOptions(decimal: true),
            decoration: InputDecoration(
              hintText: "Altura",
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(15)
              ),
              icon: Icon(Icons.accessibility)
            ),
          ),
          TextField(
            controller: _massaController,
            keyboardType: TextInputType.numberWithOptions(decimal: true),
            decoration: InputDecoration(
              hintText: "Massa",
              border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(15)
              ),
              icon: Icon(Icons.straighten)
            ),

          ),
          Text("$_resultado",
            style:  TextStyle(
              fontSize: 30,
              fontWeight: FontWeight.bold,
            )
            ),
          Text("$_situacao",
            style:  TextStyle(
              fontSize: 25,
              fontWeight: FontWeight.bold,
            )
            ,)
        ],
      ),
      bottomNavigationBar: BottomNavigationBar(
        backgroundColor: Colors.blueAccent,
        onTap: _onItemTapped,
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.clear,
              color: Colors.white,
              size: 25,
            ),
            title: Text("Limpar",
              style: TextStyle(
                  color:Colors.white,
                  fontSize: 25
              ),)
          ),
          BottomNavigationBarItem(
              icon: Icon(Icons.check,
                  color: Colors.white,
                  size: 25,
              ),
              title: Text("Calcular",
                style: TextStyle(
                    color: Colors.white,
                    fontSize: 25
                ) ,),

          ),
        ],
      ),
    );
  }
}
