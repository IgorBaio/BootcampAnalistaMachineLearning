import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:todo_app/models/Todo.dart';

class TodoItem extends StatefulWidget {
  final Todo todo;
  final int index;
  TodoItem({Key key,@required this.todo,@required this.index}) : super(key: key);

  @override
  _TodoItemState createState() => _TodoItemState(todo, index);
}

class _TodoItemState extends State<TodoItem> {
  Todo _todo;
  int _index;
  final _tituloController = TextEditingController();
  final _descricaoController = TextEditingController();
  final key = GlobalKey<ScaffoldState>();

  _TodoItemState(Todo todo, int index){
    this._todo = todo;
    this._index = index;
    if(todo != null){
      _descricaoController.text = _todo.descricao;
      _tituloController.text = _todo.titulo;
    }
  }

  _saveItem() async {
    if(_tituloController.text.isEmpty || _descricaoController.text.isEmpty){
      key.currentState.showSnackBar(SnackBar(
          content: Text("Campos obrigatórios")
        )
      );
    }else{
      SharedPreferences prefs = await SharedPreferences.getInstance();

      List<Todo> list = [];
      var data = prefs.getString("list");
      if (data != null){
        var objs = jsonDecode(data) as List;
        list = objs.map((obj) => Todo.fromJson(obj)).toList();
      }
      debugPrint(list.toString());
      _todo = Todo.fromTituloDescricao(_tituloController.text,_descricaoController.text);

      if(_index != -1){
        list[_index] = _todo;
      }else{
        list.add(_todo);
      }

      prefs.setString('list', jsonEncode(list));
      Navigator.pop(context);

    }


  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: key,
      appBar: AppBar(
        backgroundColor: Colors.purple,
        title: Text("ToDo Item"),
      ),
      body: Column(
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextField(
              controller: _tituloController,
              decoration: InputDecoration(
                hintText: "Título",
                border: OutlineInputBorder(),
              ),


            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextField(
              controller: _descricaoController,
              decoration: InputDecoration(
                hintText: "Descrição",
                border: OutlineInputBorder(),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: ButtonTheme(
              minWidth: double.infinity,
              child: RaisedButton(
                child: Text(
                  "Salvar",
                  style: TextStyle(
                      fontSize: 24
                  ),),
                textColor: Colors.white,
                color: Colors.purple,
                onPressed: () {
                  _saveItem();

                },
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: ButtonTheme(
              minWidth: double.infinity,
              child: RaisedButton(
                child: Text(
                  "Limpar",
                  style: TextStyle(
                      fontSize: 24
                  ),),
                textColor: Colors.purple,
                color: Colors.white,
                onPressed: () {
                  debugPrint(_tituloController.text);
                  debugPrint(_descricaoController.text);

                },
              ),
            ),
          ),


        ],
      ),
    );
  }
}
