if (Meteor.isClient) {

  Template.hello.onCreated(function(){
      Meteor.call('dashboardService',function(err,res){
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


  // events for hello template
  Template.hello.events({
    "change .search": function (event) {
        console.log("text value",event.target.value);
        Session.set("search_val",event.target.value);
        Router.go('/search/');
    }
  });

  Template.search.events({
    "change .search": function (event) {
      searchKey = event.target.value;
      console.log("searchkey",searchKey)
      Meteor.call('searchService',searchKey,function(err,res){
        if(err){
          alert(err);
        }
        if(res){
            search_res = JSON.parse(res);
            console.log("search res",search_res)
            Session.set("search_articles",search_res);
        }

      });
    }
  });

  Template.blog.onCreated(function(){
      console.log("template blog created");
      console.log("blogid received in blog.onCreated",this.data);
      blogID=this.data;
      Meteor.call('blogDetails',blogID,function(err,res){
        if(err){
          alert(err);
        }
        if(res){
            home_page_res = JSON.parse(res);
            console.log("blogdeatils json res:",home_page_res);
            Session.set("blog_details",{articles:home_page_res.articles,related_articles:home_page_res.related_articles});
        }

      });
    });


}

