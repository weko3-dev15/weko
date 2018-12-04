(function (angular) {
  // Bootstrap it!
  angular.element(document).ready(function() {
    angular.module('searchManagement.controllers', []);
    function searchManagementCtrl($scope, $rootScope,$http,$location){
      $scope.testdata= "angular test info :angularjs is successfully running  !!!";
      $scope.initData = function(data){
        $scope.dataJson = angular.fromJson(data);
        $scope.rowspanNum = $scope.dataJson.detail_condition.length+1;
      }
      // set selected data to allow
      $scope.setAllow=function(data){
        res = data
        alert(data)
      }
      // set selected data to deny
      $scope.setDeny=function(data){
        res = data
        alert(data)
      }
      //
      $scope.saveData=function(){

      }

      //
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

