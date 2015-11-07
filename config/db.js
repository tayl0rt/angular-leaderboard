//Define your DB in dbURI.js, require it here, and connect it with mongoose

mongoose = require('mongoose');

db = require('../config/dbURI');

mongoose.connect(db.URI);
