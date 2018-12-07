(function (angular) {
  // Bootstrap it!
  angular.element(document).ready(function() {
    angular.module('searchDetail.controllers', []);
    function searchDetailCtrl($scope, $rootScope,$http,$location){
      $scope.testText ="angularjs is successfully runing !!!!";
    }
    // Inject depedencies
    searchDetailCtrl.$inject = [
      '$scope',
      '$rootScope',
      '$http',
      '$location'
    ];
    angular.module('searchDetail.controllers')
      .controller('searchDetailCtrl', searchDetailCtrl);

    angular.module('searchDetailModule', ['searchDetail.controllers']);

     angular.module('searchDetailModule', ['searchDetail.controllers']).config(['$interpolateProvider', function($interpolateProvider) {
      $interpolateProvider.startSymbol('[[');
      $interpolateProvider.endSymbol(']]');
　　}]);

    angular.bootstrap(
      document.getElementById('search_detail'), ['searchDetailModule']);
  });
})(angular);

