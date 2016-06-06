describe('NewsSummaryService', function(){
  beforeEach(module('newsSummaryApp'));

  var NewsSummaryService, httpBackend;
  var NewsStory = {news: "Terrorist Alert in London"};

  beforeEach(inject(function(_NewsSummaryService_, $httpBackend){
    NewsSummaryService = _NewsSummaryService_;
    httpBackend = $httpBackend;

  }));



  it('fetches the news headlines', function(){

    httpBackend.expectGET('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics?show-fields=body.json').respond(NewsStory);

    NewsSummaryService.getNews().then(function(data) {
      expect(data).toEqual(NewsStory);
    });
    httpBackend.flush(); // only gets the request when 
  });

});
