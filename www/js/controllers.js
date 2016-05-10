var app_vermist = angular.module('app_vermist', ['ngRoute'])

.config(function($routeProvider) {
        $routeProvider
            .when('#/app/people/:personId', {
                templateUrl : 'templates/recept.html',
                controller  : 'ReceptCtrl'
            })
    })

.controller("RouteController", function($scope, $routeParams) {
  console.log($routeParams)
    $scope.param = $routeParams.param;
})


.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);

    // $http.get("http://rr-websites.nl/testmap/webapp/index.php").success(function(data, status) {
    //   console.log(data);
    // });

        $http.post("http://rr-websites.nl/testmap/webapp/index.php", $scope.LoginData).success(function(data, status) {
            var hello = data;

            console.log(hello);
        });
  };

})


.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {

 $scope.SignUp = function() {


}

})


.controller('ReceptenCtrl', function($scope, $http) {
  $http.get('http://rr-websites.nl/testmap/webapp/index.php').then(function(response){

    $scope.recepten = response.data;
  });


})

.controller('ReceptCtrl', function($scope, $http ,$location) {
  var path = $location.path();
  var split = path.split('/');
  $http.get('http://rr-websites.nl/testmap/webapp/index.php?id=' + split[3]).then(function(response){

    $scope.recepten = response.data;
  });


})



.controller('FormCtrl', function($scope, $http){


  $scope.submitForm = function(valid){
    if (valid) {
      console.log('de form is gesubmit');

      $http.post('http://rr-websites.nl/testmap/webapp/index.php?id=').then(function(response){

      });
       } else{

      console.log('de form is niet valid');
    }

  }
})
