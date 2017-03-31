routerApp.controller('homeCtrl', function($scope,$http){

$scope.text='Welcome to the Home Page';
 $scope.getAccessLogs=function(){
        $http.get('http://localhost:8000/getAccessLogs').then(function(response){
          $scope.accessLogs=response.data;
        });
      };

      $scope.getAccessLogs();

      $scope.deleteAccessLog=function(id){
        debugger
        $http.delete('http://localhost:8000/deleteAccessLog/'+id).then(function(response){
          $scope.getAccessLogs();
        });
      };

});