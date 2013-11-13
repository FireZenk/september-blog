# App
express = require 'express'
app     = express()

# Router
app.use(app.router)

# Server
http    = require 'http'
url 	= require 'url'
server  = http.createServer app

# Database
mongojs = require 'mongojs'
db = mongojs 'september', ['posts']

# Objects
post = require './post'

# Posts router
app.use '/post', require('./routes/post').middleware

# Categories router
app.use '/category', require('./routes/category').middleware

# Tags router
app.use '/tag', require('./routes/tag').middleware

# 404 handler
###
app.use (req, res) ->
    res.send "404"
###

###
	TODO Integrar disqus
###

# Serve index page
app.use '/', express.static '../client/'


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

# FIX: Heroku port override:
port = process.env.PORT || 5000

server.listen port, () ->
  console.log "September running at port #{port} ..."