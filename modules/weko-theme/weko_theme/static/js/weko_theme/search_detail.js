(function (angular) {
  // Bootstrap it!
  angular.element(document).ready(function() {
    angular.module('searchDetail.controllers', []);
    function searchDetailCtrl($scope, $rootScope,$http,$location){
      $scope.testText ="angularjs is successfully runing !!!!";
      $scope.condition_data=[
        {
          selected_key:"title",
          key_options:[
                {id:'title',contents:"title"},
                {id:'creator',contents:"Author Name"},
                {id:'subject',contents:"Subject"},
                {id:'type',contents:"Resource Type"},
                {id:'dategranted',contents:"Academic degree date"},
                {id:'rights',contents:"Rights"}
                ],
          key_value:{'id':'title','contents':'Title','useable_status':false,'mapping':['title'], 'sche_or_attr':[{'id':'title','contents':'title', 'checkStus':false}], 'default_display':false, 'inputType':'text', 'inputVal':'', 'mappingFlg':false, 'mappingName':''}
        },
        {
          selected_key:"creator",
          key_options:[
                {id:'title',contents:"title"},
                {id:'creator',contents:"Author Name"},
                {id:'subject',contents:"Subject"},
                {id:'type',contents:"Resource Type"},
                {id:'dategranted',contents:"Academic degree date"},
                {id:'rights',contents:"Rights"}
                ],
          key_value:{'id':'creator','contents':'Author Name','useable_status':false,'mapping':['creator'], 'sche_or_attr':[{'id':'creator','contents':'creator', 'checkStus':false}],'default_display':false, 'inputType':'text', 'inputVal':'', 'mappingFlg':false, 'mappingName':''}
        },
        {
          selected_key:"subject",
          key_options:[
                {id:'title',contents:"title"},
                {id:'creator',contents:"Author Name"},
                {id:'subject',contents:"Subject"},
                {id:'type',contents:"Resource Type"},
                {id:'dategranted',contents:"Academic degree date"},
                {id:'rights',contents:"Rights"}
                ],
          key_value:{'id':'subject','contents':'Subject','useable_status':false, 'mapping':['BSH','DDC','LCC','LCSH','MeSH','NDC','NDLC','NDLSH','UDC','Other', 'Scival'],
               'sche_or_attr':[{'id':'1','contents':'BSH', 'checkStus':false},
                                  {'id':'2','contents':'DDC', 'checkStus':false},
                                  {'id':'3','contents':'LCC', 'checkStus':false},
                                  {'id':'4','contents':'LCSH', 'checkStus':false},
                                  {'id':'5','contents':'MeSH', 'checkStus':false},
                                  {'id':'6','contents':'NDC', 'checkStus':false},
                                  {'id':'7','contents':'NDLC', 'checkStus':false},
                                  {'id':'8','contents':'NDLSH', 'checkStus':false},
                                  {'id':'9','contents':'UDC', 'checkStus':false},
                                  {'id':'10','contents':'Other', 'checkStus':false},
                                  {'id':'11','contents':'Scival', 'checkStus':false}],
               'default_display':false, 'inputType':'text', 'inputVal':'', 'mappingFlg':true, 'mappingName':'sbjscheme'}
        },
        {
          selected_key:"type",
          key_options:[
                {id:'title',contents:"title"},
                {id:'creator',contents:"Author Name"},
                {id:'subject',contents:"Subject"},
                {id:'type',contents:"Resource Type"},
                {id:'dategranted',contents:"Academic degree date"},
                {id:'rights',contents:"Rights"}
                ],
          key_value:{'id':'type','contents':'Resource Type','useable_status':false,'mapping':['Conference','Paper','Departmental','Bulletin',
                                                                                                 'Paper','Journal','Article','Article','Book','Presentation',
                                                                                                 'Data','or','Dataset','Research','Paper','Technical','Report',
                                                                                                 'Thesis','or','Dissertation','Learning','Material','Software'],
                                                                                      'check_val':[{'id':'1','contents':'Conference Paper', 'checkStus':false},
                                                                                                      {'id':'2','contents':'Departmental Bulletin Paper', 'checkStus':false},
                                                                                                      {'id':'3','contents':'Journal Article', 'checkStus':false},
                                                                                                      {'id':'4','contents':'Article', 'checkStus':false},
                                                                                                      {'id':'5','contents':'Book', 'checkStus':false},
                                                                                                      {'id':'6','contents':'Presentation', 'checkStus':false},
                                                                                                      {'id':'7','contents':'Data or Dataset', 'checkStus':false},
                                                                                                      {'id':'8','contents':'Research Paper', 'checkStus':false},
                                                                                                      {'id':'9','contents':'Technical Report', 'checkStus':false},
                                                                                                      {'id':'10','contents':'Thesis or Dissertation', 'checkStus':false},
                                                                                                      {'id':'11','contents':'Learning Material', 'checkStus':false},
                                                                                                      {'id':'12','contents':'Software', 'checkStus':false},
                                                                                                      ],
                                                                                      'default_display':false,'inputType':'checkbox_list', 'inputVal':'', 'mappingFlg':false, 'mappingName':''}
        },
        {
          selected_key:"dategranted",
          key_options:[
                {id:'title',contents:"title"},
                {id:'creator',contents:"Author Name"},
                {id:'subject',contents:"Subject"},
                {id:'type',contents:"Resource Type"},
                {id:'dategranted',contents:"Academic degree date"},
                {id:'rights',contents:"Rights"}
                ],
          key_value:{'id':'dategranted','contents':'Academic degree date','useable_status':false,'mapping':['date'], 'default_display':false,  'inputType':'dateRange', 'inputVal_from':'', 'inputVal_to':'','mappingFlg':false, 'mappingName':''}
        },
        {
          selected_key:"rights",
          key_options:[
                {id:'title',contents:"title"},
                {id:'creator',contents:"Author Name"},
                {id:'subject',contents:"Subject"},
                {id:'type',contents:"Resource Type"},
                {id:'dategranted',contents:"Academic degree date"},
                {id:'rights',contents:"Rights"}
                ],
          key_value:{'id':'rights','contents':'Rights','useable_status':false,'mapping':['CC','BY','CC','BY-SA','CC','BY-ND','CC','BY-NC','CC','BY-NC-SA','ANY'],
                                                                                'radio_val':[
                                                                                  {'id':'CC BY','contents':'CC BY'},
                                                                                  {'id':'CC BY-SA','contents':'CC BY-SA'},
                                                                                  {'id':'CC BY-ND','contents':'CC BY-ND'},
                                                                                  {'id':'CC BY-ND','contents':'CC BY-NC'},
                                                                                  {'id':'CC BY-NC-SA','contents':'CC BY-NC-SA'},
                                                                                  {'id':'ANY','contents':'ANY'},
                                                                                ],'default_display':false,  'inputType':'radio_list', 'inputVal':'', 'mappingFlg':false, 'mappingName':''}
        }


      ]
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

