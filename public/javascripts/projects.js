angular.module('projects', []).controller('ProjectsController', ['$scope', function($scope) {
	$.get('/projects', function(data, err) {
		$scope.projects = data;
		$scope.$apply();
	});

	$scope.setcurrent = function(project) {
		$scope.currentProject = project;
		$('#ProjectModal').css('display', 'block');
	};
}]);

$(document).ready(function() {
	$('#ProjectModal > img').click(function() {
		$('#ProjectModal').css('display', 'none');
	});
});