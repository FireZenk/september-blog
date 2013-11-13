(function() {
  var db, express, mongojs, router;

  express = require('express');

  router = new express.Router();

  mongojs = require('mongojs');

  db = mongojs('september', ['posts']);

  router.get('/', function(req, res) {
    return db.posts.find({}).sort({
      date: 1
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

  router.get('/:id', function(req, res) {
    return db.posts.find({
      _id: mongojs.ObjectId("" + req.params.id)
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

  router.get('/new/', function(req, res) {});

  router.get('/edit/:id', function(req, res) {});

  module.exports = router;

}).call(this);
