(function() {
    angular
        .module('app')
        .config(config);

    function config($routeProvider, $locationProvider) {
        $routeProvider
                // home page
                .when('/', {
                    templateUrl: 'views/home.html',
                    controller: 'MainCtrl'
                })
                .when('/cats', {
                    templateUrl: 'views/cat.html',
                    controller: 'CatCtrl'
                })
                .when('/gifs', {
                    templateUrl: 'views/gif.html',
                    controller: 'GifCtrl'
                })
                .when('/coupons', {
                    templateUrl: 'views/coupon.html',
                    controller: 'CouponsCtrl'
                });

            $locationProvider.html5Mode(true);
    }
})();
