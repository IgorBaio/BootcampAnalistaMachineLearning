class Post{
  int id;
  int userId;
  String title;
  String body;

  Post.fromJson(Map<String,dynamic> json)
      : id = json["id"],
        userId = json["userId"],
        title = json["title"],
        body = json["body"];
}