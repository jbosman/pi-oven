var pies = require('express').Router()
var Pie = require('../../../db/models/pie')

module.exports = pies;

pies.get('/', function(req,res,next){

	Pie.findAll()
	.then(function(allPies){
		res.status(200).send(allPies)
	})
	.catch(next)

})

pies.get('/:id', function(req,res,next){
	Pie.findById(req.params.id)
	.then(function(pi){
		res.status(200).send(pi)
	})
	.catch(next)
})

pies.post('/:id', function(req,res,next){

})

pies.put('/:id', function(req,res,next){

})

pies.delete('/:id', function(req,res,next){

})
