angular.module("newsSummaryApp")
  .factory('NewsSummaryFactory', function() {
    var article = function(title, url, image) {
      this.title = title;
      this.url = url;
      this.image = image;
    };
    return article;
  });
