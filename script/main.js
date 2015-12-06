
var app = angular.module('SearchArtist',[]);

app.controller('ArtistSearch',function($scope,$http){
$scope.isShowArtname=false;	
$scope.isShowTrack=false;	
$scope.isShow=false;
	$scope.searchCall = function(){
		if($scope.artName.toLowerCase()=='jack' && $scope.numOfTracks=='4')	
		{
			document.getElementById("searchForArtist").style.display="none";
    		document.getElementById("cover").style.background="none";    		
    		$http.jsonp("http://itunes.apple.com/search?term=jack&limit=4", {
    			params: {
			      'callback': 'JSON_CALLBACK',
      				'id': 'some-app-id'
    				}
				}).success(function(response) {
    				$scope.names = response.results;
			});
    		$scope.isShow=true;
		}
		else
		{
			if($scope.artName.toLowerCase()!='jack')
					$scope.isShowArtname=true;	
			if($scope.numOfTracks!='4')
					$scope.isShowTrack=true;		
		}
	};
	

	
	
});


