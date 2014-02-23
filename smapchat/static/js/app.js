var chatApp = angular.module('Smapchat', ['goangular', 'ngRoute', 'smapchatControllers']);

chatApp.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
});

chatApp.config(function($goConnectionProvider) {
  $goConnectionProvider.$set('https://goinstant.net/90cc363c5211/mchacks');
});

chatApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: '/static/partials/loading.html',
      controller: 'SmapchatCtrl'
    }).
    when('/none',  {
      templateUrl: '/static/partials/nomaps.html',
      controller: 'SmapchatCtrl'
    });
}]);