app.config(function($stateProvider){
	$stateProvider.state('piPage', {
		url: '/pi/:id',
		templateUrl: 'js/pi/piView/pi.view.html',
		controller: 'piViewCtrl',
		resolve: {
			clickPie: function($http, $stateParams){
				return $http.get('/api/pies/' + $stateParams.id)
						.then(function(response){
							return response.data;
						})
			}
		}

	})
})