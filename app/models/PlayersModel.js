var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PlayerSchema   = new Schema({
		name: String,
		score: 0
	},
	{collection: 'Players' });

module.exports = mongoose.model('Players', PlayerSchema);