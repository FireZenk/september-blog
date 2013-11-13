Post = () ->
	@title = ""
	@content = ""
	@author = ""
	@categories = []
	@tags = []
	@date = ""
	@modified = ""
	@published = true

create = (title, content, categories, tags, published) ->
	post = new Post()
	post.title = title
	post.content = content
	post.categories = categories
	post.tags = tags
	post.published = published
	post.date = Date.now()
	return post

edit = (title, content, categories, tags, published) ->
	post = new Post()
	title = title
	content = content
	categories = categories
	tags = tags
	published = published
	modified = Date.now()
	return post

exports.create = create
exports.edit = edit