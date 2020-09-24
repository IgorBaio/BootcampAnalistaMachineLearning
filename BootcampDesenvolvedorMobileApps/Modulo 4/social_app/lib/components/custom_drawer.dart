import 'package:flutter/material.dart';
import 'package:social_app/screens/feed.dart';
import 'package:social_app/screens/perfil.dart';
import 'package:social_app/service/placeholder_service.dart';

class CustomDrawer extends StatelessWidget {
  final _placeholdeService = PlaceholderService();
  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        children: <Widget>[
          DrawerHeader(
            child: Image.asset("assets/logo.png"),
            decoration: BoxDecoration(color: Colors.deepPurple),
          ),
          ListTile(
            title: Text(
              "Perfil",
              style: TextStyle(fontSize: 20),
            ),
            onTap: (){
              Navigator.pop(context);
              _placeholdeService.getPerfil().then((user) {
                Navigator.pushReplacement(context,
                    MaterialPageRoute(
                      builder: (context) => Perfil(user),
                    ));
              });

            },
          ),
          ListTile(
            title: Text(
              "Feed",
              style: TextStyle(fontSize: 20),
            ),
            onTap: (){
              Navigator.pop(context);
              Navigator.pushReplacement(context,
                  MaterialPageRoute(
                    builder: (context) => Feed(),
                  ));
            },
          ),
        ],
      ),
    );
  }
}
