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

    $(window).on('load resize', function(){
      alert('Browser Resized!!!')
      alert(window.innerHeight)





    });



});
