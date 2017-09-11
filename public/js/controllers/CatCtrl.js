(function() {
    'use strict';
    angular
        .module('app')
        .controller('CatCtrl', CatCtrl);

    CatCtrl.$inject = ['$scope', 'CatsService'];

    function CatCtrl($scope, catsService) {
        $scope.cats;
        catsService.get().then(function(cats) {
            $scope.cats = cats;
        });

        $scope.currentCat;
        $scope.getCat = function (cat) {
            cat.clicks += 1
            $scope.currentCat = cat;
        }
    }
})();
