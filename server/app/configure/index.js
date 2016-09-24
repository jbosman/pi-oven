'use strict'

module.exports = function(app){

	// Function used by app to access custom variables
	app.setValue = app.set.bind(app)

	app.getValue = function(path){
		return app.get(path)
	}

	require('./app-variables')(app);

	// Logging middleware, set as application
	// variable inside of server/app/configure/app-variables.js
	app.use(app.getValue('log'));

	require('./static-middleware')(app)
	require('./parsing-middleware')(app);
};