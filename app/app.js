var local_app = function () {}

// * ———————————————————————————————————————————————————————— * //
// * 	init
// *
// *	gets called upon starting enduro.js production server
// *	@param {express app} app - express app
// *	@return {nothing}
// * ———————————————————————————————————————————————————————— * //
local_app.prototype.init = function (app) {

    // express app available here
	// don't forget these routes will be available on production server (defaults to localhost:5000)

    // R
    app.get('/api/random_number', function (req, res) {
        res.send(Math.random().toString())
    })
}

module.exports = new local_app()
