'use strict'

var Sequelize = require('sequelize')
var db = require('../_db')

module.exports = db.define('pie', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	ipAddress: {
		type: Sequelize.STRING,
		allowNull: false
	},
	port: {
		type: Sequelize.STRING,
		allowNull: false
	}
}, {
	getterMethods: {
		getUrl: function() {
			return "http://" + this.ipAddress + ":" + this.port;
		}
	}
})

