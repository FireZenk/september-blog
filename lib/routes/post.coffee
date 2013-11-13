# Router
express = require 'express'
router = new express.Router()

# Database
mongojs = require 'mongojs'
db = mongojs 'september', ['posts']

# All
router.get '/', (req, res) ->
	db.posts.find({}).sort date:1, (err, docs) ->
		if not err
			res.send (x for x in docs)
		else
			res.send err

# Single
router.get '/:id', (req, res) ->
	db.posts.find {_id: mongojs.ObjectId "#{req.params.id}"}, (err, docs) ->
    	if not err 
    		res.send (x for x in docs)
    	else 
    		res.send err

router.get '/new/', (req, res) ->
	#TODO db.random_pairs.insert

router.get '/edit/:id', (req, res) ->
	#TODO db.random_pairs.update
 
module.exports = router;