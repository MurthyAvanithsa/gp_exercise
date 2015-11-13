if(Meteor.isServer) {
  Meteor.methods({
      dashboardService: function() {
          var url = "http://127.0.0.1:8000/homepage/?lang=json";
          //synchronous GET
          var result = Meteor.http.get(url, {timeout:30000});
          if(result.statusCode==200) {
            return result.content;
          }
      },
      searchService: function(query_string) {
          console.log("searchService Called");
          var url = "http://127.0.0.1:8000/search/?query="+query_string;
          console.log("calling url",url);
          //synchronous GET
          var result = Meteor.http.get(url, {timeout:30000});
          if(result.statusCode==200) {
            return result.content
          };
      },
      blogDetails:function(blog_id){
          console.log("searchService Called");
          var url = "http://127.0.0.1:8000/article/"+blog_id+"/?lang=json";
          console.log("calling url",url);
          //synchronous GET
          var result = Meteor.http.get(url, {timeout:30000});
          if(result.statusCode==200) {
            return result.content;
          }
      },
  });
}