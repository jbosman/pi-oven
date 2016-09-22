var pies = require('express').Router()
module.exports = pies;

pies.get('/', function(req,res,next){
	res.send("Welcome to pies")
})

pies.get('/:id', function(require){

})

pies.post('/:id', function(req,res,next){

})

pies.put('/:id', function(req,res,next){

})

pies.delete('/:id', function(req,res,next){

})
