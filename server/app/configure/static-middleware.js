var path = require('path')
var express = require('express')


module.exports = function(app){

	var root = app.getValue('projectRoot')

	var npmPath = path.join(root, './node_modules')
	var browserPath = path.join(root, './browser')

	app.use(express.static(npmPath))
	app.use(express.static(browserPath))

}
