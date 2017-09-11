(function() {
    'use strict';
    angular
        .module('app')
        .controller('CouponsCtrl', couponsCtrl);

    couponsCtrl.$inject = ['$scope', 'CouponsService'];

    function couponsCtrl($scope, couponsService) {
        $scope.coupons;
        couponsService.get().then(function(coupons) {
            $scope.coupons = coupons.coupons;
        });
    }
})();
