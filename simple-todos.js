if (Meteor.isClient) {

  Template.hello.onCreated(function(){
      Meteor.call('fetchFromService',function(err,res){
        if(err){
          alert(err);
        }
        if(res){
            home_page_res = JSON.parse(res);
            Session.set("blog_articles",home_page_res);
        }

      });
    }
  );
  Template.hello.blogs = function() {
       console.log("blog_articles",Session.get('blog_articles'))
       return Session.get('blog_articles');
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
    return "http://localhost:8000"+url_string
  });
  
}

if(Meteor.isServer) {
  Meteor.methods({  
  fetchFromService: function() {
      var url = "http://127.0.0.1:8000/homepage/?lang=json";
      //synchronous GET
      var result = Meteor.http.get(url, {timeout:30000});
      if(result.statusCode==200) {
        return result.content
      } 
    }
});
}