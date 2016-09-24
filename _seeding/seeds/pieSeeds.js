
var Pie = function(name){
	this.name = name
}

// Array of pie descriptions
// Add to this array if you'd like to seed additional pies
var pieNames =	[
					'shadeAlarmClock', 
					'lightSwitchKitchen', 
					'lightSwitchLivingRoom'
				 ]
	
var pieSeeds = ( () => pieNames.map( pieName =>  new Pie(pieName) ))()  // <-- IIFY

module.exports = pieSeeds;
