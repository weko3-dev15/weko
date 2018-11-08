require([
  "jquery",
  "bootstrap"
], function() {
  $('#btn_back').on('click', function(){
    window.history.back();
  });

  $('#public_status_btn').on('click', function(){
     var status = $(this).val();
     var data = {'public_status': status};
     var urlHref = window.location.href.split('/')
     const url = urlHref[0] + '//' + urlHref[2] + '/records/' + urlHref[4] + '/pubstatus'
     $.ajax({
       url: url,
       type: 'POST',
       contentType:'application/json',
       data: JSON.stringify(data),
       dataType:'json'
     });
    if (status == 'Public') {
      $(this).text('Change to Public');
      $(this).val('Private');
      $('#public_status').text('Private');
    } else {
      $(this).text('Change to Private');
      $(this).val('Public');
      $('#public_status ').text('Public');
    };
  });

  var timer = 0;
  $(window).on('load resize', function(){
    if (timer > 0) {clearTimeout(timer);}
    timer = setTimeout(function () {
      browserHeight = window.innerHeight;

      height = $('#index-height').text()
      if (height !== 'Unspecified') {
        indexHeight = ((parseFloat(browserHeight) / 12) * parseFloat(height)).toFixed();
        $('.index-body').css('height',indexHeight.toString());
      }
    }, 200);
  });

});
