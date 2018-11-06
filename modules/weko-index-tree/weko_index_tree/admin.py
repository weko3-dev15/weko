# -*- coding: utf-8 -*-
#
# This file is part of WEKO3.
# Copyright (C) 2017 National Institute of Informatics.
#
# WEKO3 is free software; you can redistribute it
# and/or modify it under the terms of the GNU General Public License as
# published by the Free Software Foundation; either version 2 of the
# License, or (at your option) any later version.
#
# WEKO3 is distributed in the hope that it will be
# useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
# General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with WEKO3; if not, write to the
# Free Software Foundation, Inc., 59 Temple Place, Suite 330, Boston,
# MA 02111-1307, USA.

"""WEKO3 module docstring."""

import sys

from flask import abort, current_app, flash, request
from flask_admin import BaseView, expose
from flask_babelex import gettext as _
from werkzeug.local import LocalProxy

from . import config

class IndexSettingView(BaseView):
    @expose('/', methods=['GET', 'POST'])
    def index(self):
        try:
            if request.method == 'GET':
                return self.render(config.WEKO_INDEX_TREE_ADMIN_TEMPLATE,
                                   shib_flg='GET')
            elif request.method == 'POST':
                return self.render(config.WEKO_INDEX_TREE_ADMIN_TEMPLATE,
                                   shib_flg='POST')

        except:
            current_app.logger.error('Unexpected error: ', sys.exc_info()[0])
        return abort(400)


index_adminview = {
    'view_class': IndexSettingView,
    'kwargs': {
        'category': _('Setting'),
        'name': _('Index Tree'),
        'endpoint': 'indextree'
    }
}

__all__ = (
    'index_adminview',
    'IndexSettingView',
)
