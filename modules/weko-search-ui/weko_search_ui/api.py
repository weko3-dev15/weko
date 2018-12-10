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
from weko_index_tree.api import Indexes
from weko_admin import config as ad_config


class SearchSetting(object):
    """About search setting"""

    @classmethod
    def get_results_setting(cls):
        """Get result setting"""
        res = sm.get()
        options =dict()
        sort_options=dict()
        display_number = 20
        if res:
            display_number = res.default_dis_num
            res = res.sort_setting.get('allow')
        else:
            return current_app.config['RECORDS_REST_SORT_OPTIONS'], display_number

        for x in res:
            key_str = x.get('id')
            key = key_str[0:key_str.rfind('_',1)]
            val = current_app.config['RECORDS_REST_SORT_OPTIONS'].get(current_app.config['SEARCH_UI_SEARCH_INDEX']).get(key)
            if not key in options.keys():
                options[key]= val

        sort_options[current_app.config['SEARCH_UI_SEARCH_INDEX']] = options

        return sort_options, display_number

    @classmethod
    def get_default_sort(cls, search_type):
        """Get default sort """
        res = sm.get()
        sort_str=None
        if res :
            if search_type == current_app.config['WEKO_SEARCH_TYPE_KEYWORD']:
                sort_str=res.default_dis_sort_keyword
            else:
                sort_str = res.default_dis_sort_index
        else:
            if search_type == current_app.config['WEKO_SEARCH_TYPE_KEYWORD']:
                sort_str= current_app.config['WEKO_SEARCH_MANAGEMENT_OPTIONS'].get('dlt_keyword_sort_selected')
            else:
                sort_str = current_app.config['WEKO_SEARCH_MANAGEMENT_OPTIONS'].get('dlt_index_sort_selected')

        sort_key = sort_str[0:sort_str.rfind('_', 1)]

        sort = sort_str[sort_str.rfind('_', 1)+1:]

        return  sort_key, sort

    @classmethod
    def get_sort_key(cls, key_str):

        return current_app.config['RECORDS_REST_SORT_OPTIONS'].get(current_app.config['SEARCH_UI_SEARCH_INDEX']).get(key_str).get('fields')[0]

    @classmethod
    def get_custom_sort(cls, index_id, sort_type):
        """Get custom sort"""
        if sort_type =="asc":
            factor_obj = Indexes.get_item_sort(index_id)
            script_str = {
                "_script": {
                    "script": "factor.get(doc[\"control_number\"].value)&&factor.get(doc[\"control_number\"].value) !=0 ? factor.get(doc[\"control_number\"].value):Integer.MAX_VALUE",
                    "type": "number",
                    "params": {
                        "factor": factor_obj
                    },
                    "order": "asc"
                }
            }
            default_sort = {'_score': {'order': 'desc'}}
        else:
            factor_obj = Indexes.get_item_sort(index_id)
            script_str = {
                "_script": {
                    "script": "factor.get(doc[\"control_number\"].value)&&factor.get(doc[\"control_number\"].value) !=0 ? factor.get(doc[\"control_number\"].value):0",
                    "type": "number",
                    "params": {
                        "factor": factor_obj
                    },
                    "order": "desc"
                }
            }
            default_sort = {'_score': {'order': 'asc'}}

        return script_str, default_sort

    @classmethod
    def get_search_detail_keyword(cls, str):
        """Get search detail keyword"""
        if not str:
            res = sm.get()
            options=None
            key_options = dict()
            if res :
                options = res.search_conditions
            else :
                options = ad_config['WEKO_SEARCH_MANAGEMENT_OPTIONS'].get('detail_condition')

            key_options['condition_setting']= options
            current_app.logger.debug('CCCCCCCC')
            return key_options
