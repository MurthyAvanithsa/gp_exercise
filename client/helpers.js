Template.search.helpers({
    searchVar:function(){
        return Session.get("search_val");
    }
  });

Template.article_list.articles = function() {
   return Session.get('search_articles').articles;
};

Template.hello.blogs = function() {
   console.log("blog_articles",Session.get('blog_articles'))
   return Session.get('blog_articles');
};

Template.blog.blog_details = function() {
   console.log("blog_details",Session.get('blog_details'));
   return Session.get('blog_details');
};

UI.registerHelper('shortIt', function(stringToShorten, maxCharsAmount){
if(stringToShorten.length > maxCharsAmount){
return stringToShorten.substring(0, maxCharsAmount) + '...';
}
return stringToShorten;
});

Handlebars.registerHelper("increment", function(count_string) {
return count_string+1
});

Handlebars.registerHelper("add_base_url", function(url_string) {
return "http://192.168.2.5:8000"+url_string
});
