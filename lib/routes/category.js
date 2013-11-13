(function() {
  var db, express, mongojs, router;

  express = require('express');

  router = new express.Router();

  mongojs = require('mongojs');

  db = mongojs('september', ['posts']);

  router.get('/:name', function(req, res) {
    return db.posts.find({
      categories: req.params.name
    }, function(err, docs) {
      var x;
      if (!err) {
        return res.send((function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = docs.length; _i < _len; _i++) {
            x = docs[_i];
            _results.push(x);
          }
          return _results;
        })());
      } else {
        return res.send(err);
      }
    });
  });

  module.exports = router;

}).call(this);
