(function() {
  var Post, create, edit;

  Post = function() {
    this.title = "";
    this.content = "";
    this.author = "";
    this.categories = [];
    this.tags = [];
    this.date = "";
    this.modified = "";
    return this.published = true;
  };

  create = function(title, content, categories, tags, published) {
    var post;
    post = new Post();
    post.title = title;
    post.content = content;
    post.categories = categories;
    post.tags = tags;
    post.published = published;
    post.date = Date.now();
    return post;
  };

  edit = function(title, content, categories, tags, published) {
    var modified, post;
    post = new Post();
    title = title;
    content = content;
    categories = categories;
    tags = tags;
    published = published;
    modified = Date.now();
    return post;
  };

  exports.create = create;

  exports.edit = edit;

}).call(this);
