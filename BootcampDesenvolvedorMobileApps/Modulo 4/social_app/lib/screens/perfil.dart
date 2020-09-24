import 'package:flutter/material.dart';
import 'package:social_app/components/custom_drawer.dart';
import 'package:social_app/models/user.dart';

class Perfil extends StatelessWidget {
  final User user;

  Perfil(this.user);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.deepPurple,
        title: Text("Perfil"),
        centerTitle: true,
      ),
      drawer: CustomDrawer(),
      body: Column(
        children: <Widget>[
          Expanded(
            child: Card(
              margin: EdgeInsets.all(8),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Center(
                    child: Text("${user.name}",
                      style: TextStyle(
                        fontSize: 30
                      ),
                    ),
                  ),
                  Text("Username: ${user.userName}",
                    style: TextStyle(
                        fontSize: 22,
                    ),
                  ),
                  Text("Email: ${user.email}",
                    style: TextStyle(
                        fontSize: 22
                    ),
                  ),
                  Text("Telefone: ${user.phone}",
                    style: TextStyle(
                        fontSize: 22
                    ),
                  ),
                  Text("Site: ${user.webSite}",
                    style: TextStyle(
                        fontSize: 22
                    ),
                  ),
                ],
              ),
            ),
          ),
          Expanded(
            child: Card(
              margin: EdgeInsets.all(8),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Center(
                    child: Text("Endereço",
                      style: TextStyle(
                          fontSize: 30
                      ),
                    ),
                  ),
                  Text("Rua: ${user.address.street}",
                    style: TextStyle(
                      fontSize: 22,
                    ),
                  ),
                  Text("Apt: ${user.address.suite}",
                    style: TextStyle(
                        fontSize: 22
                    ),
                  ),
                  Text("Cidade: ${user.address.city}",
                    style: TextStyle(
                        fontSize: 22
                    ),
                  ),
                  Text("Cep: ${user.address.zipCode}",
                    style: TextStyle(
                        fontSize: 22
                    ),
                  ),
                ],
              ),
            ),
          ),

        ],
      ),
    );
  }
}
