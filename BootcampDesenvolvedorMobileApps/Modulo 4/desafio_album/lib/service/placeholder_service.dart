import 'dart:convert';

import 'package:desafio_album/models/album.dart';
import 'package:desafio_album/models/photo.dart';
import 'package:desafio_album/models/user.dart';
import "package:http/http.dart" as http;
class PlaceholderService {
  var baseUrl = "https://jsonplaceholder.typicode.com";

  Future<List<Album>> getAlbums(int userId) async {
    var response = await http.get("$baseUrl/users/$userId/albums");
    if (response.statusCode == 200) {
      var objs = jsonDecode(response.body) as List;
      var albums = objs.map((obj) => Album.fromJson(obj)).toList();
      return albums;
    }else{
      throw Exception("Erro ao buscar o album do usuário");
    }
  }
  Future<List<User>> getUsers() async{
    var response = await http.get("$baseUrl/users");
    if(response.statusCode == 200){
      var objs = jsonDecode(response.body) as List;
      var users = objs.map((obj) => User.fromJson(obj)).toList();
      return users;
    }else{
      throw Exception("Erro ao buscar os usuários");
    }
  }

  Future<List<Photo>> getPhotos(int userId, int albumId) async{
    var response = await http.get("$baseUrl/albums/$albumId/photos");
    if(response.statusCode == 200){
      var objs = jsonDecode(response.body) as List;
      var photos = objs.map((obj) => Photo.fromJson(obj)).toList();
      return photos;
    }else{
      throw Exception("Erro ao buscar os usuários");
    }
  }

}
