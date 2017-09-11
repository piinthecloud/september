(function() {
    angular
        .module('app')
        .factory('CouponsService', couponsService);

    couponsService.$inject = ['$http'];
    function couponsService($http) {
        var service = {
            get: get
        };

        return service;

        function get() {
            return $http.get('/api/coupons').then(function(res){
                return res.data;
            });
        }
    }
})();
