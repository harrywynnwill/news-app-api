newsSummaryApp.service('NewsSummaryService', ['$http','NewsSummaryFactory',  function($http, NewsSummaryFactory) {
  var self = this;
  var API_LINK = "http://content.guardianapis.com/search?&show-fields=thumbnail,image&api-key=test"



  self.getNews = function(){
      return $http.get(API_LINK)
       .then(_getNewsHeadLines_);
    };

  function _getNewsHeadLines_ (response) {
   return response.data.response.results.map(function(item){
     return new NewsSummaryFactory(item.webTitle, item.webUrl, item.fields.thumbnail) ;
    });
  }
}]);
