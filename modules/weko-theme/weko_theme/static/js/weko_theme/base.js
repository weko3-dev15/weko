require([
  "jquery",
  "bootstrap"
  ], function() {
    $(document).ready(function() {
      $('#btn_edit_start').on('click', function(){
        window.location.href = '/schema/list/';
      });
      $('#btn_edit_stop').on('click', function(){
        window.location.href = '/';
      });
    });

    var timer = 0;
    $(window).on('load resize', function(){
      if (timer > 0) {clearTimeout(timer);}
      timer = setTimeout(function () {
        browserHeight = window.innerHeight;

        height = $('#index-height').text()
        if (height !== 'unspecified') {
          indexHeight = browserHeight
//          indexHeight = ((parseFloat(browserHeight) / 12) * parseFloat(height)).toFixed();
          $('.index-body').css('height',indexHeight.toString());
        }
      }, 200);
    });
});
