angular.module('pomoWebApp')
	.controller('todoListController', ['$scope', 'toDoFunctions','toDoItem', '$log','$uibModal',function($scope, toDoFunctions,toDoItem, $log, $uibModal){
		$scope.toDoList = [];
		$scope.empty = true;

		$scope.populateToDos = function(){

			toDoFunctions.retrieve()
				.then(function(data){
					$scope.toDoList = data.data;
					
					if($scope.toDoList.length > 0){
						$scope.empty = false;
					}
				})
		};

		$scope.$watch('toDoList', function(newValue, oldValue){
			if(newValue !== oldValue){
				if(newValue.length === 0){
					$scope.empty = true;
				}else{
					$scope.empty = false;
				}
			}
		});

		$scope.populateToDos();

		$scope.displayOptions = function(id){
			var toDoClass = 'column-' + id;
			$('.'+toDoClass).children('td#options').removeClass('hidden');
		}

		$scope.hideOptions =function(id){
			var toDoClass = 'column-' + id;
			$('.'+toDoClass).children('td#options').addClass('hidden');
		}

		$scope.deleteToDo = function(id){
			var toDoId = {
				id:id
			};
			// database is looking for a json, not a value.

			toDoFunctions.delete(toDoId)
				.then(function(){
					$scope.populateToDos();
				}, function(){

				})
		}

		// Modal logic



		$scope.openModal = function(toDo){
			$scope.toDo = toDo;
			var modalInstance = $uibModal.open({
				animation:true,
				templateUrl:'myModalContent.html',
				controller:'modalInstanceCtrl',
				resolve:{
					toDo:function(){
						return $scope.toDo;
					}
				}
			});

		};

	}])