myNote.factory('tasks', function($http) {
  var urlBase = '/api/tasks';
  var _todoService = {};
 
  _todoService.getTasks = function() {
    return $http.get(urlBase);
  };
 
 
  return _todoService;
});
