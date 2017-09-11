(function() {
    angular
        .module('app')
        .controller('GifCtrl', GifCtrl);

    GifCtrl.$inject = ['$scope', 'GifsService'];

    function GifCtrl($scope, gifsService) {
        $scope.gifs;
        gifsService.get().then(function(gifs) {
            $scope.gifs = gifs;
        });
    }
})();
