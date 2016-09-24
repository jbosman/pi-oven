var express = require('express')

var db = require('../db/_db')

var app = express()

// Configures some path variables
require('./configure')(app);

app.use('/api', require('./routes'))

app.get('/*', function (req, res) {
  res.sendFile()
})

// Error catching endware.
app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
})

var startServer = () => app.listen( 3000, () => console.log('The pies are baking on port 3000!'))

db.sync()
.then(startServer)
.catch(console.err)