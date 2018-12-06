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


from flask import current_app
from invenio_db import db
from weko_admin.models import SearchManagement as sm


class SearchSetting(object):
    """About search setting"""

    @classmethod
    def get_results_sort_list(self):
        res = sm.get()
        options =dict()
        sort_options=dict()
        if res:
            res = res.sort_setting.get('allow')
        else:
            res = current_app.config.WEKO_SEARCH_MANAGEMENT_OPTIONS.get('sort_options').get('allow')

        for x in res:
            key_str = x.get('id')
            key = key_str[0:key_str.rfind('_',1)]
            val = current_app.config['RECORDS_REST_SORT_OPTIONS'].get(current_app.config['SEARCH_UI_SEARCH_INDEX']).get(key)
            if not key in options.keys():
                options[key]= val

        sort_options[current_app.config['SEARCH_UI_SEARCH_INDEX']] = options

        return sort_options



