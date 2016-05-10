// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'app_vermist'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

/*angular.module('starter', ['ngAnimate'])*/


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })


.state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
  })


  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.vermistopgeven', {
    url: '/vermistopgeven',
    views: {
      'menuContent': {
        templateUrl: 'templates/vermistopgeven.html'
      }
    }
  })

  .state('app.accountaanmaken', {
    url: '/accountaanmaken',
    views: {
      'menuContent': {
        templateUrl: 'templates/accountaanmaken.html'
      }
    }
  })



    .state('app.recepten', {
      url: '/recepten',
      views: {
        'menuContent': {
          templateUrl: 'templates/recepten.html',
          controller: 'ReceptenCtrl'
        }
      }
    })

  .state('app.recept', {
    url: '/recepten/:receptId',
    views: {
      'menuContent': {
        templateUrl: 'templates/recept.html',
        controller: 'ReceptCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/recepten');

});
