(function() {
    angular
        .module('app')
        .factory('GifsService', gifsService);

    gifsService.$inject = ['$http'];
    function gifsService($http) {
        var service = {
            get: get
        };

        return service;

        function get() {
            return $http.get('/api/gifs').then(function(res){
                return res.data;
            });
        }
    }
})();
