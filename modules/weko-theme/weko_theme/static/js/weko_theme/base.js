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

      var options = {
          cellHeight: 80,
          verticalMargin: 10
      };
      $('.grid-stack').gridstack(options);

      this.grid = $('.grid-stack').data('gridstack');

      this.saveGrid = function () {
          this.serializedData = _.map($('.grid-stack > .grid-stack-item:visible'), function (el) {
              el = $(el);
              var node = el.data('_gridstack_node');
              return {
                  x: node.x,
                  y: node.y,
                  width: node.width,
                  height: node.height
              };
          });
          $('#saved-data').val(JSON.stringify(this.serializedData, null, '    '));
          return false;
      }.bind(this);

      $('#save-grid').click(this.saveGrid);
    });
});
