'use strict';

angular.module('app-ejcalc')
	.controller('ejcalc', ['$scope', function ($scope) {

		$scope.nblP = {
			pg 			: 60,
			vg 			: 40,
			water 		: 10,
			nicotine 	: 18
		};

	}]);