class Comment{
  int id;
  int postId;
  String name;
  String email;
  String body;

  Comment.fromJson(Map<String,dynamic> json)
      : id = json["id"],
        postId = json["postid"],
        name = json["name"],
        email = json["email"],
        body = json["body"];

}