angular.module('app-ejcalc')
    .directive('nblPanel', function() {
        return {
            templateUrl : '../partials/ejcalc-nbl-panel.html'
        };
    })
angular.module('app-ejcalc')
    .directive('targetPanel', function() {
        return {
            templateUrl : '../partials/ejcalc-target-panel.html'
        };
    });