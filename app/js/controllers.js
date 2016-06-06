angular.module("newsSummaryApp")
  .controller( "NewsSummaryController", ['NewsSummaryService', function(NewsSummaryService) {

    var self = this;



    NewsSummaryService.getNews().then(function(articles){
    self.articles = articles;

    });


  }]);
