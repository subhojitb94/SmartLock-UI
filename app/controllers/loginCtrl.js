routerApp.controller('loginCtrl', function($rootScope,$scope,$http,$state){

$scope.text='Welcome to the Login Page';
$scope.auth=function(usr){
 ;
var loginDTO={"Username":usr.Username,"Password":usr.Password};
 $http({
  method: 'POST',
  url: 'http://192.168.43.30:8000/authenticateUser',  
  data: loginDTO
}).then(function successCallback(response) {
  debugger
  if(response.data.status===0){
   alertify.success('Welcome to SmartLock !')
   $rootScope.isLoggedIn=true;
   
   sessionStorage.setItem('authToken', response.data.authToken);
    sessionStorage.setItem('loggedinUsername', response.data.userName);
    sessionStorage.setItem('loggedinName', response.data.name);
   $state.go('dashboard');
  }
  else{
    if(response.data.status===1){
      alertify.error('Invalid Password !');
    }
    if(response.data.status===2){
      alertify.error('Invalid User !')
    }
  }
   
  }, function errorCallback(response) {
     alertify.error('Unable to contact server, Login Failed');
  });
}

});