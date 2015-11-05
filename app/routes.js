var Players = require('./models/PlayersModel');

module.exports = function(app) {

var player = new Players();

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

		Players.create(req.body, function(err, doc) {
			if (err) {
				res.send(err);
			}

			res.json(doc);
			console.log(res);

			//Refresh the list of players
			Players.find();
		});
	});

	//DELETE

	app.delete('/api/players/:_id', function(req, res) {

		Players.remove({
			_id: req.params._id
		}, function(err, doc) {
			if (err) {
				res.send(err);
			}

			res.json(doc);
			console.log(res);

			//Refresh the list of players
			Players.find();
		});
	});


	//PUT

	//todo: fix PUT error - either throws a 'CastError: Cast to ObjectId failed for value "[object Object]" at path "_id"'
	// or TypeError: mongoose.Types.ObjectId.fromString is not a function depending on if you use mongoose.Types.ObjectId.fromString()
	// hmmmm
	app.put('/api/players/:_id', function(req, res) {

		var playerID = req.params._id;
		var playerObjectId = mongoose.Types.ObjectId.fromString( playerID );


		Players.find({_id: playerObjectId }, function(err, doc) {

			if (err) {
				res.send(err);
			}

			/*doc.score = +5;*/
			Players.update(function(err) {
				if (err) {
					console.log('Error! - ' + err);
				}
			});

			res.json(doc);
			console.log(res);

			//Refresh the list of players
			Players.find();
		});
	});


	// =========================== front end route ==================================== //


	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html'); // load our public/views/index.html file
	});

};