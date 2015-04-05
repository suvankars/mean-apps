myNote = angular.module('myNote', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/task.html',
        controller: 'TaskController'
      }).otherwise({
        redirectTo: '/'
      });
  });