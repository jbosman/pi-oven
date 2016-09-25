'use strict';

var path = require('path')
var morgan = require('morgan')

var rootPath = path.join(__dirname, '../../../') 			// pi-oven directory
var homePage = path.join(rootPath, './browser/index.html')	// index.html

module.exports = function(app){
	app.setValue('projectRoot', rootPath)
	app.setValue('homePage', homePage)
	app.setValue('log', morgan('dev'))
}