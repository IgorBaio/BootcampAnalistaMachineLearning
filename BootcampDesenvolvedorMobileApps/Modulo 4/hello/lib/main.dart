import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(Hello());
}

testeButton(){
  debugPrint('Clicou');
}

class Hello extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Material(
        color: Colors.white,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            Image.asset(
              "assets/img/baiosystems.png",
              width: 90.0,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Padding(
                  padding: const EdgeInsets.all(10.0),
                  child: Text('Hello ', style: TextStyle(
                      fontSize: 40.0,
                      fontStyle: FontStyle.italic
                  ),),
                ),
                Text('Igor', style: TextStyle(
                    fontSize: 40.0,
                    backgroundColor: Colors.blue,
                    color: Colors.white,
                    fontWeight: FontWeight.bold
                ), ),

              ],
            ),
            FlatButton(
              onPressed:testeButton,
              color: Colors.lightGreen,
              child: Text(
                'Text',
                style: TextStyle(fontSize: 20.0),
              )
            ),
            Container(
              color: Colors.amber,
              width: 300.0,
              height: 100.0,
              alignment: Alignment.center,
              child: Text("texto dentro do container",
                style: TextStyle(fontSize: 21),
              ),
            )
          ],
        ),
      ),
    );
  }
}


