//  require([
//    "jquery",
//    "bootstrap",
//    "node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker"
//    ], function() {
//    // loading all the jQuery modules for the not require.js ready scripts
//    // everywhere.
//    $(function(){
//      $('#myModal').modal({
//        show: false
//      })
//      page_global = {
//        queryObj: null
//      }
//      page_global.queryObj = query_to_hash();
//      $('#page_count').val(page_global.queryObj['size'])
//      $('#page_count').on('change', function(){
//        if(page_global.queryObj['size'] != $('#page_count').val()) {
//          page_global.queryObj['size'] = $('#page_count').val();
//          queryStr = hash_to_query(page_global.queryObj);
//          window.location.href = window.location.pathname + '?' + queryStr;
//        }
//      });
//      function query_to_hash(queryString) {
//        var query = queryString || location.search.replace(/\?/, "");
//        return query.split("&").reduce(function(obj, item, i) {
//          if(item) {
//            item = item.split('=');
//            obj[item[0]] = item[1];
//            return obj;
//          }
//        }, {});
//      };
//      function hash_to_query(queryObj) {
//        var str = '';
//        Object.keys(queryObj).forEach(function(key){
//          if(str.length > 0) {
//            str = str + '&' + key + '=' + queryObj[key];
//          } else {
//            str = key + '=' + queryObj[key];
//          }
//        });
//        return str;
//      }
//    });
//});

(function (angular) {
  // Bootstrap it!
  angular.element(document).ready(function() {
    angular.module('searchResult.controllers', []);
    function searchResCtrl($scope, $rootScope, $http){
     var commInfo=$("#community").val();
     if(commInfo != ""){
        $rootScope.commInfo="?community="+commInfo;
        $rootScope.commInfoIndex="&community="+commInfo;
     }else{
        $rootScope.commInfo="";
        $rootScope.commInfoIndex="";
     }
//   button setting
     $rootScope.disable_flg = true;
     $rootScope.display_flg = true;

      $scope.itemManagementTabEdit= function(){
        $rootScope.disable_flg = false;
        $rootScope.display_flg = false;
        $("#tab_edit").addClass("active")
        $("#tab_display").removeClass("active")
     }

     $scope.itemManagementTabDisplay= function(){
        $rootScope.disable_flg = true;
        $rootScope.display_flg = true;
        $("#tab_edit").removeClass("active")
        $("#tab_display").addClass("active")
     }

     $scope.itemManagementEdit= function(){
        $rootScope.disable_flg = false;
        $rootScope.display_flg = false;
        $("#tab_edit").addClass("active")
        $("#tab_display").removeClass("active")
     }

     $scope.itemManagementSave= function(){
//        $rootScope.disable_flg = true;
//        $rootScope.display_flg = true;
//        $("#tab_edit").removeClass("active")
//        $("#tab_display").addClass("active")
        // request api
        $http({
            method: 'POST',
            url: '/item_management/save',
            data: {
            'recid':"123"
          },
          headers: {'Content-Type': 'application/json'},
        }).then(function successCallback(response) {

        }, function errorCallback(response) {

        });
     }

     $scope.itemManagementCancel= function(){
        $rootScope.disable_flg = true;
        $rootScope.display_flg = true;
        $("#tab_edit").removeClass("active")
        $("#tab_display").addClass("active")
     }

    }
    // Inject depedencies
    searchResCtrl.$inject = [
      '$scope',
      '$rootScope',
    ];
    angular.module('searchResult.controllers')
      .controller('searchResCtrl', searchResCtrl);

    angular.module('searchResult', [
      'invenioSearch',
      'searchResult.controllers',
    ]);

    angular.bootstrap(
      document.getElementById('invenio-search'), [
        'searchResult',
      ]
    );
  });
})(angular);

