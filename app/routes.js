var Players = require('./models/PlayersModel');


module.exports = function(app) {

	// REST api

	//GET
	app.get('/api/players', function(req, res) {
		// use mongoose to get all players in the database
		Players.find(function(err, players) {



			// if there is an error retrieving, send the error.
			// nothing after res.send(err) will execute
			if (err) {
				res.send(err);
			}

			res.json(players); // return all players in JSON format
			console.log(players);
		});
	});

	//POST
	app.post('/api/players', function(req, res) {
		Players.insert(req.body, function(err, player) {
			if (err) {
				res.send(err);
			}

			res.json(player);
			console.log(player);
		});
	});

	//DELETE
	// todo: app.delete


	// =========================== front end route ==================================== //


	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html'); // load our public/views/index.html file
	});

};