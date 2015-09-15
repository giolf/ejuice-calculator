'use strict';

angular.module('app-ejcalc')
	.controller('ejcalc', ['$scope', function ($scope) {

		$scope.nblP = {
			pg 			: 60,
			vg 			: 40,
			water 		: 10,
			nicotine 	: 18
		};
		
		$scope.targetP = {
			amount 		: 10,
			pg			: 10,
			vg			: 10,
			water		: 10,
			nicotine 	: 10
		};
		
		$scope.flavoringP = [{
			name		: 'Lemon',
			percentage	: 10,
			composition	: 'PG'
		},
		{
			name		: 'Peach',
			percentage	: 15,
			composition : 'VG'
		}];
		
	}]);