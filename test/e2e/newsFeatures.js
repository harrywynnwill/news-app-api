describe('News Summary Service', function(){

  var mock = require('protractor-http-mock');

  beforeEach(function(){
  mock([{
    request: {
      path: 'http://content.guardianapis.com/search?q=debate%20AND%20economy&tag=politics/politics&from-date=2014-01-01&api-key=1a040054-b55d-4cc9-be84-dbbf108a082e',
      method: 'GET'
    },
    response: {
      data: {news: "Terrorist Alert in London"}
    }
  }]);
});
  it('displays the news headlines', function(){
    browser.get('/');
    var news = $('body');
    expect(news.getText()).toMatch("Terrorist Alert in London");
  });

  // afterEach(function(){
  //   mock.teardown();
  // });
});
