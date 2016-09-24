'use strict'

var db = require('./_db')

var Pie = require('./models/pie')

module.exports = db;

// Setup in case associations are needed later for whatever reason
// At the time of this creation there was only one model. Trying to make 
// it easier to add things later if needed...