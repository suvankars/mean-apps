myNote.factory('tasksFactory', function($http) {
  var urlBase = '/api/tasks';
  var _taskService = {};
 
  _taskService.getTasks = function() {
    return $http.get(urlBase);
  };
 
  _taskService.createTask = function(task) {
    return $http.post(urlBase, task);
  };

  _taskService.updateTask = function(task) {
    return $http.put(urlBase, task);
  };
 
  return _taskService;
});

