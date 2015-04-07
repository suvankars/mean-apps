myNote.controller('TaskController', function($rootScope, $scope, tasksFactory) {

	$scope.tasks = [];
	$scope.isEditable = [];

	tasksFactory.getTasks().then(function(data) {
		$scope.tasks = data.data;
	});


	$scope.save = function($event){
		if($event.which == 13 && $scope.taskName){
			console.log ( 'save event crete new task' );
			tasksFactory.createTask({
				"task": $scope.taskName,
				"isCompleted": false
			}).then(function(data){
				$scope.tasks.push(data.data)
			});
			$scope.taskName = '';
		}
	};

	$scope.update = function($event, id, index){
		var isChecked = $event.target.checked;
		var task = $scope.tasks[index];
		tasksFactory.updateTask({
			_id : id,
			isCompleted : isChecked,
			task : task.task
		}).then(function(data){
			if(data.data.updatedExisting){
				 task.isCompleted = isChecked;
			}else {
          		alert('something went wrong!');
        	}
		});
	};

	
	$scope.edit = function($event, i) {
		if ($event.which == 13 && $event.target.value.trim()) {
			var task = $scope.tasks[i];
			tasksFactory.updateTask({
				_id: task._id,
				task: $event.target.value.trim(),
				isCompleted: task.isCompleted
				}).then(function(data) {
				if (data.data.updatedExisting) {
					task.task = $event.target.value.trim();
					$scope.isEditable[i] = false;
				} else {
					alert('Oops something went wrong!');
				}
			});
		}
	};
 

	$scope.delete = function(index) {
    tasksFactory.deleteTask($scope.tasks[index]._id).then(function(data) {
      if (data.data) {
        $scope.tasks.splice(index, 1);
      }
    });
  };

});