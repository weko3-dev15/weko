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
})
