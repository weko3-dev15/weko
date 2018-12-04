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
        if (data){
          if (data.length==1){
            obj = dataJson.sort_options.deny[data[0]]
            dataJson.sort_options.allow.push(obj)
            dataJson.sort_options.deny.splice(data[0],1)
          }else{
            for(var i=data.length-1;i>=0;i--){
              obj = dataJson.sort_options.deny[d]
              dataJson.sort_options.allow.push(obj)
              dataJson.sort_options.deny.splice(data[i],1)
            }
          }
        }
      }
      // set selected data to deny
      $scope.setDeny=function(data){
        if (data){
          if (data.length==1){
            obj = dataJson.sort_options.allow[data[0]]
            dataJson.sort_options.deny.push(obj)
            dataJson.sort_options.allow.splice(data[0],1)
          }else{
            for(var i=data.length-1;i>=0;i--){
              obj = dataJson.sort_options.allow[d]
              dataJson.sort_options.deny.push(obj)
              dataJson.sort_options.allow.splice(data[i],1)
            }
          }
        }
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

