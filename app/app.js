var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
    
    $urlRouterProvider.otherwise('/login');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'views/home.html'
        })
        
        // nested list with custom controller
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html'
        })

        //route for creating user
        .state('register', {
            url: '/register',
            templateUrl: 'views/createuser.html'
        })

        //route for changing user password
        .state('change-password', {
            url: '/change-password',
            templateUrl: 'views/changepassword.html'
        })

        $locationProvider.html5Mode(true); //activate HTML5 Mode
        
});

routerApp.controller('mainCtrl',function($rootScope,$scope,$state){
$rootScope.isLoggedIn=false;
alertify.set('notifier','position', 'middle-right');
$rootScope.userName=sessionStorage.getItem('loggedinName');
$rootScope.$on('$stateChangeStart', 
function(event, toState, toParams, fromState, fromParams, options){ 
  
    if(toState.name==='dashboard' || toState.name==='change-password' || toState.name==='register'){
      if(sessionStorage.getItem('authToken')==null || sessionStorage.getItem('authToken')=="undefined"){
        event.preventDefault();
        $state.go('login');
      }
      else{
        $rootScope.isLoggedIn=true;
        }
    }
        
    debugger 
    // transitionTo() promise will be rejected with 
    // a 'transition prevented' error
})

    $scope.logout=function(){
        $rootScope.isLoggedIn=false;
        $state.go('login');    
        sessionStorage.removeItem('authToken');
        alertify.success('Logout successfull !');
    }
});