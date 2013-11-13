# Router
express = require 'express'
router = new express.Router()

# Database
mongojs = require 'mongojs'
db = mongojs 'september', ['posts']
 
router.get '/:name', (req, res) ->
	db.posts.find {tags: req.params.name}, (err, docs) ->
		if not err
			res.send (x for x in docs)
		else
			res.send err
 
module.exports = router;