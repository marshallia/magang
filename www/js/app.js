// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('popupCtrl', function($scope, $ionicPopup) {
$scope.detailsPartner = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Try again later!',
     template: 'No Connection Found.'
   });
 
   alertPopup.then(function(res) {
     console.log('Thank you for advice.');
   });
 };
})

controller('customersCtrl', function($scope, $http) {

    $http.get("http://localhost:80//BantuanMag/partner.php")
  .success(function (response) {$scope.names = response.records;});
});
.controller('partnerCtrl', function($scope){
  $scope.partners=[
  {
      "Name" : "Alfreds Futterkiste",
      "Country" : "Germany"
    },
    {
      "Name" : "Berglunds snabbköp",
      "Country" : "Sweden"
    },
    {
      "Name" : "Centro comercial Moctezuma",
      "Country" : "Mexico"
    }]
})

.config(function($stateProvider,$urlRouterProvider){
 
  $stateProvider
  .state('login',{
    url:'/login',
    templateUrl:'templates/login.html'
  })
  .state('home',{
    url:'/home',
    templateUrl:'templates/home.html'
  })
  .state('ccp',{
    url:'/ccp',
    templateUrl:'templates/ccp.html'
  })
  .state('partner',{
    url:'/partner',
    templateUrl:'templates/DataPartner.html',
    controller:'partnerCtrl'
  })
  .state('export',{
    url:'/export',
    templateUrl:'templates/export'
  })
  .state('import',{
    url:'/import',
    templateUrl:'templates/import.html'
  })
  .state('inventory',{
    url:'/inventory',
    templateUrl:'templates/inventory.html'
  })
  .state('achievement',{
    url:'/achievement',
    templateUrl:'templates/salesAchievement.html'
  })
  .state('order',{
    url:'/order',
    templateUrl:'templates/salesOrder.html'
  })
  ;

$urlRouterProvider.otherwise('/login');
})

/*.controller('loginCtrl',function($scope){
  $scope.data={};
  $scope.login=function(){
    console.log("Login user:"+$scope.data.username+"_pw"+$scope.data.password);
  }
})

.service('loginService',fuction($q){
  return{
    loginUser:function(name,pw){
      var defered=$q.defer();
      var promise=defered.promise;
      if(name=='user' && pw=='password'){
        defered.revolve('Selamat datang'+name+'!');
      }else {
        defered.reject('user atau password salah')
      }
      promise.
    }
  }
})*/