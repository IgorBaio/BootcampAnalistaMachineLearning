import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Conversor extends StatefulWidget {
  @override
  _ConversorState createState() => _ConversorState();
}

class _ConversorState extends State<Conversor> {
  final TextEditingController _real = TextEditingController();
  final TextEditingController _dolar = TextEditingController();
  final key = GlobalKey<ScaffoldState>();
  var _resultado = '';

  _onItemTapped(int index){
    if(index == 0){
      _real.clear();
      _dolar.clear();
      setState(() {
        _resultado = '';
      });
    }else if( _real.text.isEmpty || _dolar.text.isEmpty){
      key.currentState.showSnackBar(
          SnackBar(
            content: Text("Ambas as moedas precisam estar preenchidas"),
          ));
    }else{
      var real = double.parse(_real.text.replaceAll(",","."));
      var dolar = double.parse(_dolar.text.replaceAll(",","."));
      var valorConvertido = real/dolar;
      setState(() {
        _resultado = valorConvertido.toStringAsFixed(2);
      });
    }
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Conversor"),
        centerTitle: true,
        backgroundColor: Colors.green,
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          Image.asset("assets/img/cifrao.png", width: 90),
          TextField(
            controller: _real,
            keyboardType: TextInputType.numberWithOptions(decimal: true),
            decoration: InputDecoration(
              hintText: "Valor do Real (R\$) a ser convertido",
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(15)
              ),
            ),
          ),
          TextField(
            controller: _dolar,
            keyboardType: TextInputType.numberWithOptions(decimal: true),
            decoration: InputDecoration(
              hintText: "Cotação Dólar (U\$)",
              border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(15)
              ),
            ),
          ),
          Text("$_resultado",
            style: TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 25
            ),
          ),
        ],
      ),
      bottomNavigationBar: BottomNavigationBar(
        backgroundColor: Colors.green,
        onTap: _onItemTapped,
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.clear,
              color: Colors.white,
              size: 25,
            ),
            title: Text("Limpar",
              style: TextStyle(
                fontWeight: FontWeight.bold,
                color: Colors.white,
                fontSize: 25,
              ),
            ),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.check,
              color: Colors.white,
              size: 25,
            ),
            title: Text("Converter",
            style: TextStyle(
              fontSize: 25,
              color: Colors.white,
              fontWeight: FontWeight.bold
            ),
            )
          )
        ]
      ),
    );
  }
}
