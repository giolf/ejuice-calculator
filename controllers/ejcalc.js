'use strict';

angular.module('app-ejcalc')
	.controller('ejcalc', ['$scope', function (scope) {

		scope.nblP = {
			pg 			: 50,
			vg 			: 40,
			water 		: 10,
			nicotine 	: 18
		};
		
		scope.targetP = {
			amount 		: 10,
			pg			: 50,
			vg			: 40,
			water		: 10,
			nicotine 	: 10
		};
		
		scope.flavoringP = {
			newFlavor : {
				name 		: '',
				percentage 	: '',
				composition : 'PG'
			},
			flavorList 	: [],
			totalML 	: 0
		};
		
		scope.ferP = {
			nblML 		: '',
			pgML		: '',
			vgML		: '',
			waterML 	: ''
		};
		
		scope.add = function() {
			
			if(scope.flavoringP.newFlavor.name == '')
				scope.flavoringP.newFlavor.name = 'Flavor unnamed';

			scope.flavoringP.flavorList.push({
				name		: scope.flavoringP.newFlavor.name,
				percentage	: scope.flavoringP.newFlavor.percentage,
				composition	: scope.flavoringP.newFlavor.composition

			});
			
			
			// reset new flavor inputs
			scope.flavoringP.newFlavor.name 		= '';
			scope.flavoringP.newFlavor.percentage	= 0;
			
			// after the push of the new flavor count the new results
			scope.count();
		};
		
		scope.remove = function(index) {
			scope.flavoringP.flavorList.splice(index, 1);
			
			// after the deletion of the flavor count the new results
			scope.count();
		}
		
		scope.count = function() {

			// BEGIN count ML nicotine base liquid
			scope.ferP.nblML = (scope.targetP.nicotine * scope.targetP.amount) / scope.nblP.nicotine;
			// END count ML nicotine base liquid
			
			// BEGIN count ML water
			var waterNeeded 	= scope.targetP.amount / 100 * scope.targetP.water;
			var waterAvaiable 	= scope.ferP.nblML / 100 * scope.nblP.water;
			scope.ferP.waterML 	= waterNeeded - waterAvaiable;
			// END count ML water
			
			// BEGIN count flavors ML PG and VG
			var pgNeeded 		= scope.targetP.amount / 100 * scope.targetP.pg;
			var pgAvaiable		= scope.ferP.nblML / 100 * scope.nblP.pg;
			scope.ferP.pgML		= pgNeeded - pgAvaiable;
			// END count ML PG
			
			// BEGIN count ML VG
			var vgNeeded 		= scope.targetP.amount / 100 * scope.targetP.vg;
			var vgAvaiable		= scope.ferP.nblML / 100 * scope.nblP.vg;
			scope.ferP.vgML		= vgNeeded - vgAvaiable;
			// END count ML VG
			
			// BEGIN count flavors ML PG and VG
			angular.forEach(scope.flavoringP.flavorList, function(flavor) {
				flavor.ml = scope.targetP.amount / 100 * flavor.percentage;
				if (flavor.composition == 'PG') {
					scope.ferP.pgML -= flavor.ml;
				}
				else {
					scope.ferP.vgML -= flavor.ml;
				}
			});
			// END count flavors ML PG and VG
			
			// BEGIN count total ml final recipe
			scope.ferP.totalML = 0;
			scope.ferP.totalML = scope.ferP.nblML + scope.ferP.waterML + scope.ferP.pgML + scope.ferP.vgML;
			
			angular.forEach(scope.flavoringP.flavorList, function(flavor) {
				scope.ferP.totalML += flavor.ml;
			});
			// END count total ml final recipe
			
			console.log("totalML: ", scope.ferP.totalML);
			console.log("totaVG ML: ", scope.ferP.vgML);
			console.log("totalPG ML: ", scope.ferP.pgML);
		}
	}]);