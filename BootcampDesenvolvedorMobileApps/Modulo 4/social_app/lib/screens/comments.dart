import 'package:flutter/material.dart';
import 'package:social_app/models/comment.dart';
import 'package:social_app/service/placeholder_service.dart';

class Comments extends StatelessWidget {
  final int postId;
  final _placeholderService = PlaceholderService();

  Comments(this.postId);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Comentários"),
          backgroundColor: Colors.deepPurple,
          centerTitle: true,
        ),
        body: Container(
          color: Colors.white70,
          child: FutureBuilder<List<Comment>>(
            future: _placeholderService.getComments(postId),
            builder: (context, snapshot) {
              if (snapshot.hasData) {
                return ListView.builder(
                  itemCount: snapshot.data.length,
                  padding: EdgeInsets.all(8),
                  itemBuilder: (context, index) {
                    return Card(
                      child: Column(
                        children: <Widget>[
                          ListTile(
                            title: Text('${snapshot.data[index].name}'),
                            subtitle: Text('${snapshot.data[index].email}'),
                          ),
                          ListTile(
                            title: Text('${snapshot.data[index].body}'),
                          )
                        ],
                      ),
                    );
                  },
                );
              } else if (snapshot.hasError) {
                return Center(child: Text('${snapshot.error}'),);
              }
              return Center(
                child: CircularProgressIndicator(),
              );
            },

          ),
        )
    );
  }
}
