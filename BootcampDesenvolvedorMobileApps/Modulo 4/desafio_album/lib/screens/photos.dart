import 'package:desafio_album/models/photo.dart';
import 'package:desafio_album/service/placeholder_service.dart';
import 'package:flutter/material.dart';

class Photos extends StatelessWidget {
  final _placeholderService = PlaceholderService();
  final int userId;
  final int albumId;

  Photos(this.userId,this.albumId);

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
        child: FutureBuilder<List<Photo>>(
          future: _placeholderService.getPhotos(userId,albumId),
          builder: (context, snapshot) {
            if(snapshot.hasData){
              return ListView.builder(
                itemCount: snapshot.data.length,
                itemBuilder: (context, index) {
                  return Card(
                    child: Column(
                      children: <Widget>[
                        ListTile(
                          title: Text('${snapshot.data[index].title}'),
                          subtitle: Text('${snapshot.data[index].albumId}'),
                        ),
                        ListTile(
                          title: Image.network('${snapshot.data[index].thumbnailUrl}'),
                        )
                      ],
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
