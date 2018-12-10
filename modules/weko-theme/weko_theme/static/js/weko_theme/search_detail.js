(function (angular) {
  // Bootstrap it!
  angular.element(document).ready(function() {
    angular.module('searchDetail.controllers', []);
    function searchDetailCtrl($scope, $rootScope,$http,$location){
      $scope.testText ="angularjs is successfully runing !!!!";
      $scope.condition_data=[];
      $scope.detail_search_key=[];
      $scope.default_search_key=[]

      // page init
      $scope.initData = function(data){
        json_obj = angular.fromJson(data)
        db_data = json_obj.condition_setting;
        angular.forEach(db_data,function(item,index,array){
          if(item.useable_status){
            var obj_key={id:'',contents:'', inx:0};
            obj_key.id=item.id;
            obj_key.contents=item.contents;
            obj_key.inx = index;
            $scope.detail_search_key.push(obj_key);
          };
          if(item.default_display){
            var default_key={id:'',contents:'', inx:0};
            default_key.id=item.id;
            default_key.contents=item.contents;
            default_key.inx = index;
            $scope.default_search_key.push(default_key);
          }
        });
        angular.forEach($scope.default_search_key,function(item,index,array){
          var obj_of_condition ={selected_key:'',key_options:[], key_value:{}}
          obj_of_condition.selected_key = item.id;
          obj_of_condition.key_options = $scope.detail_search_key;
          obj_of_condition.key_value = db_data[item.inx];
          $scope.condition_data.push(obj_of_condition)
        });
//        alert(json_obj.condition_setting[0].id)
      }
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

