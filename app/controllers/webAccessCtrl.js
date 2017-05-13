routerApp.controller('webAccessCtrl',function($scope,$http){

    $scope.test= 'HI';


$scope.unlock=function(){
    var dto={
    	"uid":"webAccess"
    };

    $http({
      method: 'POST',
      url: 'http://192.168.43.30:8000/cardDetect',  
      data: dto
    }).then(function successCallback(response) {
      debugger
       alertify.success('Door Unlock Successfull !')
    
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
}

});