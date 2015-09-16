'use strict';

angular.module('app-ejcalc')
	.controller('ejcalc', ['$scope', function (scope) {

		scope.nblP = {
			pg 			: 60,
			vg 			: 40,
			water 		: 10,
			nicotine 	: 18
		};
		
		scope.targetP = {
			amount 		: 10,
			pg			: 10,
			vg			: 10,
			water		: 10,
			nicotine 	: 10
		};
		
		scope.flavoringP = {
			newFlavor : {
				name 		: 'Mint',
				percentage 	: 10,
				composition : 'PG'
			},
			flavorList : []
		};
		
		scope.add = function() {
			scope.flavoringP.flavorList.push({
				name		: scope.flavoringP.newFlavor.name,
				percentage	: scope.flavoringP.newFlavor.percentage,
				composition	: scope.flavoringP.newFlavor.composition
			});
		};
		
		scope.remove = function(index) {
			scope.flavoringP.flavorList.splice(index, 1);
		}
	}]);