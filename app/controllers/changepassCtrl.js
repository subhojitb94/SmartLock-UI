routerApp.controller('changepassCtrl',function($scope,$http){

$scope.text='Password Change';

var passwordDTO=

$scope.changePassword=function(obj){
console.log("i reach");
var passwordDTO={
  "userName": sessionStorage.getItem('loggedinUsername'),
  "oldPassword": obj.oldPassword,
  "newPassword": obj.newPassword
}
$http({  
  method: 'POST',
  url: 'http://localhost:8000/changePassword',  
  data: passwordDTO
}).then(function successCallback(response) {
  debugger
  if(response.data.status===0){
   alertify.success('Password Changed Successfully');
  }
  else if(response.data.status===1){
    alertify.error('Could Not Update Password');
  }
  else if(response.data.status===2){
      alertify.error('Incorrect Old Password');
  }
   
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
};

});