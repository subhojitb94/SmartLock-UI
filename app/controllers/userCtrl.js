routerApp.controller('userCtrl',function($scope,$http){

$scope.text='Welcome to new user registration page';

$scope.registerUser=function(registerDTO){
$http({
  method: 'POST',
  url: 'http://localhost:8000/createUser',  
  data: registerDTO
}).then(function successCallback(response) {
  debugger
   alertify.success('User Registration Successfull !')
   
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
};

});