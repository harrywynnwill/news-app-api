newsSummaryApp.service('NewsSummaryService', ['$http', function($http) {
  var self = this;
  self.getNews = function(){
    var news = this;
    return $http.get('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics?show-fields=body.json')
       .then(_handleResponseFromAPI_);
    };


  function _handleResponseFromAPI_ (response) {
    return response.data;
  }
}]);
