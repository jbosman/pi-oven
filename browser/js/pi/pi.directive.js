app.directive('pi', function(){
	return {
		restrict: 'E',
		templateUrl: 'js/pi/pi.html',
		scope: {
			pie: '='
		}
	}
})