run = (app, mongojs) ->
	# Database
	db = mongojs 'september-blog', ['posts']

	# Router
	app.use app.router

	# Objects
	post = require './post'

	# Posts router
	app.use '/post', require('./routes/post').middleware

	# Categories router
	app.use '/category', require('./routes/category').middleware

	# Tags router
	app.use '/tag', require('./routes/tag').middleware

	# Test fill db
	app.get '/db_fill', (req, res) ->
		Post = post.create "Title #{Math.random()}", "Texto de prueba", ['test','general'], ['js','node'], true
		db.posts.insert {
			"title":Post.title
			"content":Post.content
			"categories":Post.categories
			"tags":Post.tags
			"date":Post.date
			"modified":Post.modified
			"published":Post.published
		}
		res.send 'OK'

exports.run = run