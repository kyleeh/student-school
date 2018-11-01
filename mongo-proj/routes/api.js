// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const profile = require('../models/profile')

router.get('/profile', (req, res) => {

	profile.find()
	.then(profiles => {
		res.json({
			confirmation 'success',
			data: profiles
		})
	})
	.catcher(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
		
	})
})



module.exports = router
