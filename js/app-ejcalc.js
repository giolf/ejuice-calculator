'use strict';

angular.module('app-ejcalc', ['ngRoute'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/ejuice-calculator.html',
				controller: 'ejcalc'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);