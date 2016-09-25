app.directive('bodyTabs', function(){
	return {
		restict: 'E',
		templateUrl: 'js/body-tabs/body.tabs.html',
		controller: function($scope, $sce, piViewFactory){
			// console.log(piViewFactory.getConnentedPieUrl)
			// $scope.url = function(){
			// 	$sce.trustAsResourceUrl(piViewFactory.getConnentedPieUrl())
			// }

			$scope.url = $sce.trustAsResourceUrl(piViewFactory.getConnentedPieUrl());
		}
	}
})