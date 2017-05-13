routerApp.controller('homeCtrl', function($scope,$http){

$scope.text='Welcome to the Home Page';
 $scope.getAccessLogs=function(){
        $http.get('http://192.168.43.30:8000/getAccessLogs').then(function(response){
          $scope.accessLogs=response.data;
        });
      };

      $scope.getAccessLogs();

      $scope.deleteAccessLog=function(id){
        debugger
        $http.delete('http://192.168.43.30:8000/deleteAccessLog/'+id).then(function(response){
          $scope.getAccessLogs();
        });
      };

});