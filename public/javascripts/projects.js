angular.module('projects', []).controller('ProjectsController', ['$scope', function($scope) {
	$.get('/projects', function(data, err) {
		$scope.projects = data;
		$scope.$apply();
	});
}]);