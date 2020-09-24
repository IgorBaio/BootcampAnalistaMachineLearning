
import 'package:desafio_album/models/address.dart';

class User{
  int id;
  String name;
  String userName;
  String email;
  Address address;
  String phone;
  String webSite;

  User.fromJson(Map<String,dynamic> json)
      : id = json["id"],
        userName = json["username"],
        name = json["name"],
        email = json["email"],
        webSite = json["website"],
        address = Address.fromJson(json["address"]),
        phone = json["phone"];

}