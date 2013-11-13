# September-blog
septemberb = require '../lib/september-blog.js'

# App
express = require 'express'
app     = express()

# Server
http    = require 'http'
url 	= require 'url'
server  = http.createServer app

# Database
mongojs = require 'mongojs'

# Start September-blog
septemberb.run app, mongojs

# Serve index page
app.use '/', express.static '../../client/'

# FIX: Heroku port override:
port = process.env.PORT || 5000

server.listen port, () ->
  console.log "September-blog running at port #{port} ..."