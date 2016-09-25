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
	instanceMethod: {
		getUrl: function() {
			return "https://" + ipAddress + ":" + port;
		}
	}
})

