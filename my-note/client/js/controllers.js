myNote.controller('TaskController', function($rootScope, $scope, tasks) {
 
  $scope.tasks = [];
  $scope.isEditable = [];

  tasks.getTasks().then(function(data) {
    $scope.tasks = data.data;
  });
 

});