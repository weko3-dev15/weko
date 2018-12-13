require([
  "jquery",
  "bootstrap"
], function() {
  $('#btn_back').on('click', function(){
    window.history.back();
  });

//TODO
  $('.panel-toggle').on('click', function(){
    href = $(this).attr("href");
    contentClass = $(href).attr("class");
    alert(href);
//    if(contentClass === 'collapse') {
//      $(href).removeClass();
//      $(href).addClass('collapse in');
//
//    } else {
//      alert(contentClass);
//      $(href).removeClass();
//      $(href).addClass('collapse');}

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

});
