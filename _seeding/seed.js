var db = require('../server/db')
//var Pie = require('../server/db/models/pie')
var Pie = db.model('pie')
var Promise = require('sequelize').Promise

var pieSeeds = require('./seeds/pieSeeds.js')


var seedPies = () => Promise.all( pieSeeds.map( pie => Pie.create(pie) ) )
	
db.sync({force: true})
.then( () => seedPies() )
.then( () => { console.log("Seeded pies successfully!") })
.catch(console.err)
