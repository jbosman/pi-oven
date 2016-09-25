app.factory('piFactory', function($http, $log){
	var services = {}

		services.fetchAll = function(){
			return $http.get('/api/pies')
						.then(function(response){
							return response.data;
						})
						.catch($log)
		}

	return services
})