(function() {
  var assert, should;

  assert = require('assert');

  should = require('should');

  describe('Post', function() {
    var post;
    post = require('../lib/post.js');
    describe('create', function() {
      return it('should create a new post', function() {
        var m_post;
        m_post = post.create("Title", "Texto de prueba", ['test', 'general'], ['js', 'node'], true);
        m_post.should.be.type('object');
        m_post.should.have.property('title');
        m_post.should.have.property('content');
        m_post.should.have.property('author');
        m_post.should.have.property('categories');
        m_post.categories.should.be.an.Array;
        m_post.should.have.property('tags');
        m_post.tags.should.be.an.Array;
        m_post.should.have.property('date');
        m_post.should.have.property('modified');
        m_post.should.have.property('published');
        m_post.published.should.be.a.Boolean;
        m_post.should.have.property('published').and.should.be.ok;
        return m_post;
      });
    });
    return describe('edit', function() {
      return it('should return a post including modified date', function() {
        var m_post;
        m_post = post.edit("Title", "Texto de prueba", ['test', 'general'], ['js', 'node'], true);
        m_post.should.be.type('object');
        m_post.should.have.property('title');
        m_post.should.have.property('content');
        m_post.should.have.property('author');
        m_post.should.have.property('categories');
        m_post.categories.should.be.an.Array;
        m_post.should.have.property('tags');
        m_post.tags.should.be.an.Array;
        m_post.should.have.property('date');
        m_post.should.have.property('modified');
        m_post.should.have.property('published');
        m_post.published.should.be.a.Boolean;
        m_post.should.have.property('published').and.should.be.ok;
        m_post.should.have.property('modified').and.should.not.be.empty;
        return m_post;
      });
    });
  });

}).call(this);
