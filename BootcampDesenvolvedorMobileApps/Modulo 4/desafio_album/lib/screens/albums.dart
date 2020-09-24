import 'package:desafio_album/models/album.dart';
import 'package:desafio_album/screens/photos.dart';
import 'package:desafio_album/service/placeholder_service.dart';
import 'package:flutter/material.dart';

class Albums extends StatelessWidget {
  final _placeholderService = PlaceholderService();
  final int userId;

  Albums(this.userId);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Albums"),
        backgroundColor: Colors.indigo,
        centerTitle: true,
      ),
      body: Container(
        color: Colors.white70,
        child: FutureBuilder<List<Album>>(
          future: _placeholderService.getAlbums(userId),
          builder: (context, snapshot) {
            if(snapshot.hasData){
              return ListView.builder(
                itemCount: snapshot.data.length,
                itemBuilder: (context, index) {
                  return GestureDetector(
                  onTap: () {
                    Navigator.push(context,
                        MaterialPageRoute(
                            builder: (context) => Photos(
                              snapshot.data[index].userId,
                                snapshot.data[index].id
                            ))
                    );
                  },
                    child: Card(
                      child: Column(
                        children: <Widget>[
                          ListTile(
                            title: Text('${snapshot.data[index].title}'),
                          )
                        ],
                      ),
                    ),
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
