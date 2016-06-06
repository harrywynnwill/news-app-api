describe('NewsSummaryFactory', function(){
  beforeEach(module('newsSummaryApp'));
  var NewsStory;
});
beforeEach(inject(function(NewsSummaryFactory){
  NewsStory = new NewsSummaryFactory('Breaking News');
}));
it('has a news story', function(){
  expect(NewsStory.webTitle).toEqual('Breaking News')
})
