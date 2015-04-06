myNote.controller('TaskController', function($rootScope, $scope, tasksFactory) {
 
  $scope.tasks = [];
  $scope.isEditable = [];

  tasksFactory.getTasks().then(function(data) {
    $scope.tasks = data.data;
  });
 

 $scope.save = function($event){
 	if($event.which == 13 && $scope.taskName){
 		tasksFactory.createTask({
 			"task": $scope.taskName,
 			"isCompleted": false
 		}).then(function(data){
 			$scope.tasks.push(data.data)
 		});
 		$scope.taskName = '';
 	}
 };



});