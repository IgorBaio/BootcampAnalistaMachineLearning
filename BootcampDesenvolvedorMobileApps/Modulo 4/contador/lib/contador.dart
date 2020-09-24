import 'package:flutter/material.dart';

class Contador extends StatefulWidget {
  @override
  _ContadorState createState() => _ContadorState();
}

class _ContadorState extends State<Contador> {
  var quantidade = 0;

  incrementar(){
    setState(() {
      quantidade++;
    });
  }

  decrementar(){
    setState(() {
      quantidade--;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Contador"),
        centerTitle: true,
        backgroundColor: Colors.blueGrey,
      ),
      body: ListView(
        children: <Widget>[
          Card(
            child: Column(
              children: <Widget>[
                ListTile(
                  title: Text("Quantidade de Cliques:",
                    style: TextStyle(fontSize: 30),),
                ),
                Text("$quantidade",
                  style: TextStyle(fontSize: 40),),
                ButtonBar(
                  children: <Widget>[
                    FlatButton(
                      onPressed: incrementar,
                      child: Text("Incrementar",
                        style: TextStyle(fontSize: 25),
                      ),
                    ),
                    FlatButton(
                      onPressed: decrementar,
                      child: Text("Decrementar",
                        style: TextStyle(fontSize: 25),
                      ),
                    ),
                  ],
                )

              ],
            ),
          ),
        ],
      ),
    );
  }
}
