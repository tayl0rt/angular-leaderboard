var Players = require('./models/PlayersModel');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// sample api route
	app.get('/api/players', function(req, res) {
		// use mongoose to get all players in the database
		Players.find(function(err, players) {

			// if there is an error retrieving, send the error.
			// nothing after res.send(err) will execute
			if (err)
				res.send(err);

			res.json(players); // return all players in JSON format
		});
	});

	// route to handle creating goes here (app.post)

	app.put('api/players/:player_id', function(req, res) {
		Players.findById(req.params.player.id, function(error, player) {
			if (error)
				res.send(error);

			Players.update(_id, {$inc: { $score: 5 } })
		})
	});

	// route to handle delete goes here (app.delete)

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html'); // load our public/index.html file
	});

};