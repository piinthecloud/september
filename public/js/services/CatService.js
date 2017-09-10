(function() {
    angular
        .module('app')
        .factory('CatsService', catsService);

    catsService.$inject = ['$http'];
    function catsService($http) {
        var service = {
            get: get
        };

        return service;

        function get() {
            return $http.get('/api/cats').then(function(res){
                return modelCatsData(res.data.response.data.images.image);
            });
        }

        function modelCatsData(rawCats){
            angular.forEach(rawCats, function(value) {
                value.clicks = 0;
            });
            return rawCats;
        }
    }
})();
