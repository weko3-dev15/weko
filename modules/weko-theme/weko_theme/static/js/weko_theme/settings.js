/*
 * This file is part of Invenio.
 * Copyright (C) 2015-2018 CERN.
 *
 * Invenio is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

require.config({
  baseUrl: "/static/",
  paths: {
    jquery: "node_modules/jquery/jquery",
    bootstrap: "node_modules/bootstrap-sass/assets/javascripts/bootstrap",
    select2: "node_modules/select2/dist/js/select2",
//    'jquery.ui': '//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min',
//    lodash: '//cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min',
//    gridstack: '//cdnjs.cloudflare.com/ajax/libs/gridstack.js/0.3.0/gridstack.min',
//    'gridstack.jqueryui': '//cdnjs.cloudflare.com/ajax/libs/gridstack.js/0.3.0/gridstack.jQueryUI.min',
  },
//  map: {
//      '*': {
//          'jquery-ui/data': 'jquery.ui',
//          'jquery-ui/disable-selection': 'jquery.ui',
//          'jquery-ui/focusable': 'jquery.ui',
//          'jquery-ui/form': 'jquery.ui',
//          'jquery-ui/ie': 'jquery.ui',
//          'jquery-ui/keycode': 'jquery.ui',
//          'jquery-ui/labels': 'jquery.ui',
//          'jquery-ui/jquery-1-7': 'jquery.ui',
//          'jquery-ui/plugin': 'jquery.ui',
//          'jquery-ui/safe-active-element': 'jquery.ui',
//          'jquery-ui/safe-blur': 'jquery.ui',
//          'jquery-ui/scroll-parent': 'jquery.ui',
//          'jquery-ui/tabbable': 'jquery.ui',
//          'jquery-ui/unique-id': 'jquery.ui',
//          'jquery-ui/version': 'jquery.ui',
//          'jquery-ui/widget': 'jquery.ui',
//          'jquery-ui/widgets/mouse': 'jquery.ui',
//          'jquery-ui/widgets/draggable': 'jquery.ui',
//          'jquery-ui/widgets/droppable': 'jquery.ui',
//          'jquery-ui/widgets/resizable': 'jquery.ui',
//      }
//  },
  shim: {
    jquery: {
      exports: "$"
    },
    bootstrap: {
      deps: ["jquery"]
    },
    select2: {
      deps: ["jquery"],
      exports: "select2"
    }
  }
})
