class Album{
  int userId;
  int id;
  String title;

  Album.fromJson(Map<String,dynamic> json)
  : id = json['id'],
    userId = json['userId'],
    title = json['title'];
}