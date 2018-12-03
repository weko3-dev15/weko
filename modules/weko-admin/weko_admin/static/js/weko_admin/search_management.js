(function (angular) {
  // Bootstrap it!
  angular.element(document).ready(function() {
    angular.module('searchManagement.controllers', []);
    function searchManagementCtrl($scope, $rootScope,$http,$location){
      $scope.testdata= angularjs is successfully running  !!!;
    }
    // Inject depedencies
    searchManagementCtrl.$inject = [
      '$scope',
      '$rootScope',
      '$http',
      '$location'
    ];
    angular.module('searchManagement.controllers')
      .controller('searchManagementCtrl', searchManagementCtrl);

    angular.module('searchSettingModule', ['searchManagement.controllers']);

     angular.module('searchSettingModule', ['searchManagement.controllers']).config(['$interpolateProvider', function($interpolateProvider) {
      $interpolateProvider.startSymbol('[[');
      $interpolateProvider.endSymbol(']]');
　　}]);

    angular.bootstrap(
      document.getElementById('search_management'), ['searchSettingModule']);
  });
})(angular);

