app.directive('pi', function(){
	return {
		restrict: 'E',
		templateUrl: 'js/pi/pi.html',
		scope: {
			pie: '='
		},
		controller: function($scope, piViewFactory){
			$scope.setConnected = function(){
				piViewFactory.setConnected($scope.pie)
			}
		}
	}
})