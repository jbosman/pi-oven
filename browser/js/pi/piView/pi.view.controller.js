'use strict'

app.controller( 'piViewCtrl', function($scope, clickPie, $sce, $location){

	$scope.getPiUrl = function(){
		// return $sce.trustAsResourceUrl(clickPie.getUrl);
		return $sce.trustAsResourceUrl("http://localhost:4000");
	}
	
})