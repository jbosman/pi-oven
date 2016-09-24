app.factory('piFactory', function($http){
	var services = {}

		services.fetchAll = function(){
			return $http.get('/api/pies')
						.then(function(response){
							console.log("Factory: ", response.data)
							return response.data;
						})
		}

	return services
})