class Photo{
  int albumId;
  int id;
  String title;
  String url;
  String thumbnailUrl;

  Photo.fromJson(Map<String,dynamic> json)
    : albumId = json["albumId"],
      id = json["id"],
      title = json["title"],
      url = json["url"],
      thumbnailUrl = json["thumbnailUrl"];

}