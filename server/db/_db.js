var Sequelize = require('sequelize')
var db = new Sequelize('postgres://localhost:5432/pieOvenModules', {logging: console.log})

module.exports = db



