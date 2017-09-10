angular
  .module('app')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope'];

function MainCtrl($scope) {
    var ctrl = this;
    $scope.tagline = 'To the moon and back!';
}
