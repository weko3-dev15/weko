  require([
    "jquery",
    "bootstrap",
    "node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker"
    ], function() {
    // loading all the jQuery modules for the not require.js ready scripts
    // everywhere.
    $(function(){
      $('#myModal').modal({
        show: false
      })
      page_global = {
        queryObj: null
      }
      page_global.queryObj = query_to_hash();
      $('#page_count').val(page_global.queryObj['size'])
      $('#page_count').on('change', function(){
        if(page_global.queryObj['size'] != $('#page_count').val()) {
          page_global.queryObj['size'] = $('#page_count').val();
          queryStr = hash_to_query(page_global.queryObj);
          window.location.href = window.location.pathname + '?' + queryStr;
        }
      });
      function query_to_hash(queryString) {
        var query = queryString || location.search.replace(/\?/, "");
        return query.split("&").reduce(function(obj, item, i) {
          if(item) {
            item = item.split('=');
            obj[item[0]] = item[1];
            return obj;
          }
        }, {});
      };
      function hash_to_query(queryObj) {
        var str = '';
        Object.keys(queryObj).forEach(function(key){
          if(str.length > 0) {
            str = str + '&' + key + '=' + queryObj[key];
          } else {
            str = key + '=' + queryObj[key];
          }
        });
        return str;
      }
    });
});

(function (angular) {
  // Bootstrap it!
  angular.element(document).ready(function() {
    angular.module('searchResult.controllers', []);
    function searchResCtrl($scope, $rootScope, $http, $location){
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
     $rootScope.index_id_q = $location.search().q;

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
        var data = $scope.vm.invenioSearchResults.hits.hits
        alert(data)
        var custom_sort_list =[]
        for(var x in data){
           var sub = {"id":"", custom_sort:""}
           sub.id= x.id;
           sub.custom_sort=x.metadata.custom_sort;
           custom_sort_list.push(sub);
        }
        var post_data ={"q_id":$rootScope.index_id_q, "sort":custom_sort_list}

　　   // request api
        $http({
            method: 'POST',
            url: '/item_management/save',
            data: post_data,
          headers: {'Content-Type': 'application/json'},
        }).then(function successCallback(response) {
          window.location.href = '/search?search_type=2&q='+$rootScope.index_id_q;
        }, function errorCallback(response) {
          window.location.href = '/search?search_type=2&q='+$rootScope.index_id_q;
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
      '$http',
      '$location'
    ];
    angular.module('searchResult.controllers')
      .controller('searchResCtrl', searchResCtrl);

    angular.module('searchResult', [
      'invenioSearch',
      'searchResult.controllers',
    ]);

    angular.bootstrap(
      document.getElementById('invenio-search'), [
        'searchResult','invenioSearch'
      ]
    );
  });
})(angular);

