app.directive('allPies', function(piFactory){
	return {
		restrict: 'E',
		templateUrl: '/js/pi/all.pies.html',
		controller: function($scope, piFactory){
			piFactory.fetchAll()
			.then(function(allPies){
				$scope.pies = allPies
			})
		}
	}
})
