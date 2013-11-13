(function() {
  var app, db, express, http, mongojs, port, post, server, url;

  express = require('express');

  app = express();

  app.use(app.router);

  http = require('http');

  url = require('url');

  server = http.createServer(app);

  mongojs = require('mongojs');

  db = mongojs('september', ['posts']);

  post = require('./post');

  app.use('/post', require('./routes/post').middleware);

  app.use('/category', require('./routes/category').middleware);

  app.use('/tag', require('./routes/tag').middleware);

  /*
  app.use (req, res) ->
      res.send "404"
  */


  /*
  	TODO Integrar disqus
  */


  app.use('/', express["static"]('../client/'));

  app.get('/db_fill', function(req, res) {
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

  port = process.env.PORT || 5000;

  server.listen(port, function() {
    return console.log("September running at port " + port + " ...");
  });

}).call(this);
