// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

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

    if(window.plugins && window.plugins.socialsharing) {
      console.log('SocialSharing is ready');
    }
  });
})

.controller('ShareCtrl', ['$scope', '$cordovaSocialSharing', function ($scope, $cordovaSocialSharing) {
  $scope.shareTwitter = function () {
    console.log('Share Twitter');

    $cordovaSocialSharing
      .shareViaTwitter('A Twitter share message', null, 'http://petehouston.com')
      .then(function(result) {
        console.log(result);
      }, function(err) {
        console.log('Error: ' + JSON.stringify(err));
      });
  };

  $scope.shareFacebook = function () {
    console.log('Share Facebook');

    $cordovaSocialSharing
      .shareViaFacebook('A Facebook share message', null, 'http://petehouston.com')
      .then(function(result) {
        console.log(result);
      }, function(err) {
        console.log('Error: ' + JSON.stringify(err));
      });
  };

  $scope.share = function () {
    console.log('Share Native');
    $cordovaSocialSharing
      .share('A native share message', 'A Subject', null, 'http://petehouston.com')
      .then(function(result) {
        console.log(result);
      }, function(err) {
        console.log('Error: ' + JSON.stringify(err));
      });
  };
}])
