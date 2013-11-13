(function() {
  var run;

  run = function(app, mongojs) {
    var db, post;
    db = mongojs('september-blog', ['posts']);
    app.use(app.router);
    post = require('./post');
    app.use('/post', require('./routes/post').middleware);
    app.use('/category', require('./routes/category').middleware);
    app.use('/tag', require('./routes/tag').middleware);
    return app.get('/db_fill', function(req, res) {
      var Post;
      Post = post.create("Title " + (Math.random()), "Texto de prueba", ['test', 'general'], ['js', 'node'], true);
      db.posts.insert({
        "title": Post.title,
        "content": Post.content,
        "categories": Post.categories,
        "tags": Post.tags,
        "date": Post.date,
        "modified": Post.modified,
        "published": Post.published
      });
      return res.send('OK');
    });
  };

  exports.run = run;

}).call(this);
