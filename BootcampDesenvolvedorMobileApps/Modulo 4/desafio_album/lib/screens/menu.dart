import 'package:desafio_album/models/album.dart';
import 'package:desafio_album/models/user.dart';
import 'package:desafio_album/screens/albums.dart';
import 'package:desafio_album/service/placeholder_service.dart';
import 'package:flutter/material.dart';

class Menu extends StatefulWidget {
  @override
  _MenuState createState() => _MenuState();
}

class _MenuState extends State<Menu> {
  final _placeholderService = PlaceholderService();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Galeria"),
        backgroundColor: Colors.indigo,
        centerTitle: true,
      ),
      body: Container(
        child: FutureBuilder<List<User>>(
          future: _placeholderService.getUsers(),
          builder: (context, snapshot) {
            if (snapshot.hasData) {
              return ListView.builder(
                padding: const EdgeInsets.all(8),
                itemCount: snapshot.data.length,
                itemBuilder: (context, index) {
                  return GestureDetector(
                    onTap: () {
                      Navigator.push(context, MaterialPageRoute(
                        builder: (context) => Albums(snapshot.data[index].id),
                      ));
                    },
                    child: Card(
                      child: Padding(
                          padding: const EdgeInsets.all(8),
                          child: Column(
                            children: <Widget>[
                          ListTile(
                          title: Text("${snapshot.data[index].name}",
                            style: TextStyle(
                                fontSize: 25
                            ),
                          ),
                          subtitle: Text("${snapshot.data[index].email}",
                            style: TextStyle(
                                fontSize: 20
                            ),
                          )),
                          ]
                    ),
                  ),)
                  ,
                  );
                },
              );
            }else if (snapshot.hasError) {
              return Center(child: Text('${snapshot.error}'),);
            }
            return Center(
              child: CircularProgressIndicator(),
            );
          },
        ),
      ),
    );
  }
}
