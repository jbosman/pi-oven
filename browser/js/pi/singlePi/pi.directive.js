app.directive('pi', function(){
	return {
		restrict: 'E',
		templateUrl: 'js/pi/singlePi/pi.html',
		scope: {
			pie: '='
		}
	}
})