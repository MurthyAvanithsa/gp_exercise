  //  Routing
  Router.configure({
    layoutTemplate: 'main'
  });
  Router.route('/', function () {
    this.render('hello');
  });
  Router.route('/search/', function () {
    this.render('search');
  });

  Router.route('/blog/:blogID/', function () {
    console.log("router blog",this.params.blogID);
    this.render('blog',{data:function(){return this.params.blogID;}});
  });
