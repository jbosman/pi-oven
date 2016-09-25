app.factory('piViewFactory', function($sce){

	var services = {}

	var currentPieUrl = "badURL";

	services.getConnentedPieUrl = function() {
		console.log("returning: ", currentPieUrl)
		return currentPieUrl
	}

	services.setConnected = function(pie){
		currentPieUrl = "https://" + pie.ipAddress + ":" + pie.port + "/";
		console.log("set url: ", currentPieUrl)

	}

	return services;

})