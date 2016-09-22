var express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// Provide route debugging
app.use(morgan('dev'))

app.use('/api', require('./routes'));

app.get('/', function (req, res) {
  res.send('Hello World')
})

// Error catching endware.
app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
})

app.listen(3000, function(){
	console.log('The pies are baking on port 3000!')
})