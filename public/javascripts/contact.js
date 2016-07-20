angular.module('contactForm', []).controller('FormController', ['$scope', function($scope) {
	$scope.update = function(user) {
		$.post('/email', user, function(data, err) {
			alert(data);
		});
	};
}]);