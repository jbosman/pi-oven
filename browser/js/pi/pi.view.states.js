// app.config(function($stateProvider){
// 	$stateProvider.state('piPage', {
// 		url: '/pi/:id',
// 		templateUrl: '<iframe class="center-block width="1000" src={{url}}></iframe>',
// 		resolve: {
// 			url: function($http, $stateParams){
// 				return $http.get('/api/pies/' + $stateParams.id)
// 				.then(function(response){
// 					return response.data.getUrl();
// 				})
// 			}
// 		}

// 	})
// })