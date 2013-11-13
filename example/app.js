(function() {
  var app, express, http, mongojs, port, septemberb, server, url;

  septemberb = require('../lib/september-blog.js');

  express = require('express');

  app = express();

  http = require('http');

  url = require('url');

  server = http.createServer(app);

  mongojs = require('mongojs');

  septemberb.run(app, mongojs);

  app.use('/', express["static"]('../../client/'));

  port = process.env.PORT || 5000;

  server.listen(port, function() {
    return console.log("September-blog running at port " + port + " ...");
  });

}).call(this);
