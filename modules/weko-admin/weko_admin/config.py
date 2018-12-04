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

"""Configuration for weko-admin."""

WEKO_ADMIN_DEFAULT_LIFETIME = 60
""" Session time out setting, default 60 minutes """

WEKO_ADMIN_BASE_TEMPLATE = 'weko_admin/base.html'
"""Base templates for weko-admin module."""

WEKO_ADMIN_SETTINGS_TEMPLATE = None
"""Settings base templates for weko-admin module."""

WEKO_ADMIN_LIFETIME_TEMPLATE = 'weko_admin/settings/lifetime.html'
"""Settings base templates for weko-admin module."""

WEKO_ADMIN_SITE_LICENSE_TEMPLATE = 'weko_admin/site_license.html'
"""Site-license templates."""

WEKO_ADMIN_BlOCK_STYLE_TEMPLATE = 'weko_admin/block_style.html'
"""Block-style templates."""

WEKO_ADMIN_SEARCH_MANAGEMENT_TEMPLATE = 'weko_admin/search_management.html'
"""Site-license templates."""

LOGO_ALLOWED_EXTENSIONS = set(['png', 'jpeg', 'jpg'])

# Search management json


WEKO_SEARCH_MANAGEMENT_OPTIONS = {
    'dlt_dis_num_options':[
        {'id': '20', 'contents': '20'},
        {'id': '50', 'contents': '50'},
        {'id': '75', 'contents': '75'},
        {'id': '100', 'contents': '100'}
    ],
    'dlt_dis_num_selected': '20',
    'dlt_index_sort_options':[
        {'id': 'title_asc', 'contents': 'Title_ASC'},
        {'id': 'title_desc', 'contents': 'Title_DESC'},
        {'id': 'creator_asc', 'contents': 'creator_ASC'},
        {'id': 'creator_desc', 'contents': 'creator_DESC'},
        {'id': 'itemType_asc', 'contents': 'itemType_ASC'},
        {'id': 'itemType_desc', 'contents': 'itemType_DESC'},
        {'id': 'id_asc', 'contents': 'ID_ASC'},
        {'id': 'id_desc', 'contents': 'ID_DESC'},
        {'id': 'upd_asc', 'contents': 'Update_ASC'},
        {'id': 'upd_desc', 'contents': 'Update_DESC'},
        {'id': 'publish_date_asc', 'contents': 'publish_date_ASC'},
        {'id': 'publish_date_desc', 'contents': 'publish_date_DESC'},
        {'id': 'custom_asc', 'contents': 'Custom_ASC'},
        {'id': 'custom_desc', 'contents': 'Custom_DESC'},
    ],
    'dlt_index_sort_selected': 'id_asc',
    'dlt_keyword_sort_options':[
        {'id': 'title_asc', 'contents': 'Title_ASC'},
        {'id': 'title_desc', 'contents': 'Title_DESC'},
        {'id': 'creator_asc', 'contents': 'creator_ASC'},
        {'id': 'creator_desc', 'contents': 'creator_DESC'},
        {'id': 'itemType_asc', 'contents': 'itemType_ASC'},
        {'id': 'itemType_desc', 'contents': 'itemType_DESC'},
        {'id': 'id_asc', 'contents': 'ID_ASC'},
        {'id': 'id_desc', 'contents': 'ID_DESC'},
        {'id': 'upd_asc', 'contents': 'Update_ASC'},
        {'id': 'upd_desc', 'contents': 'Update_DESC'},
        {'id': 'publish_date_asc', 'contents': 'publish_date_ASC'},
        {'id': 'publish_date_desc', 'contents': 'publish_date_DESC'},
        {'id': 'custom_asc', 'contents': 'Custom_ASC'},
        {'id': 'custom_desc', 'contents': 'Custom_DESC'},
    ],
    'dlt_keyword_sort_selected': 'publish_date_desc',
    'sort_options':{
        'deny':[],
        'allow':[
            {'id': 'title_asc', 'contents': 'Title_ASC'},
            {'id': 'title_desc', 'contents': 'Title_DESC'},
            {'id': 'creator_asc', 'contents': 'creator_ASC'},
            {'id': 'creator_desc', 'contents': 'creator_DESC'},
            {'id': 'itemType_asc', 'contents': 'itemType_ASC'},
            {'id': 'itemType_desc', 'contents': 'itemType_DESC'},
            {'id': 'id_asc', 'contents': 'ID_ASC'},
            {'id': 'id_desc', 'contents': 'ID_DESC'},
            {'id': 'upd_asc', 'contents': 'Update_ASC'},
            {'id': 'upd_desc', 'contents': 'Update_DESC'},
            {'id': 'publish_date_asc', 'contents': 'publish_date_ASC'},
            {'id': 'publish_date_desc', 'contents': 'publish_date_DESC'},
            {'id': 'custom_asc', 'contents': 'Custom_ASC'},
            {'id': 'custom_desc', 'contents': 'Custom_DESC'},
        ]
    },
    'detail_condition':[
        {'id':'title','contents':'Title','useable_status':True,'mapping':['title'],'default_display':True},
        {'id':'author_name','contents':'Author Name','useable_status':False,'mapping':['creator'],'default_display':False},
        {'id':'subject','contents':'Subject','useable_status':False,'mapping':['BSH','DDC','LCC','LCSH','MeSH','NDC','NDLC','NDLSH','UDC','Scival','Other'],'default_display':False},
        {'id':'region','contents':'Region','useable_status':False,'mapping':['region'],'default_display':False},
        {'id':'description','contents':'Description','useable_status':False,'mapping':['description'],'default_display':False},
        {'id':'publisher','contents':'Publisher','useable_status':False,'mapping':['publisher'],'default_display':False},
        {'id':'contributors','contents':'Contributors','useable_status':False,'mapping':['contributor'],'default_display':False},
        {'id': 'contents_created_date', 'contents': 'Contents created date', 'useable_status': False, 'mapping': ['date'], 'default_display':False},
        {'id':'format','contents':'Format','useable_status':False,'mapping':['format'],'default_display':False},
        {'id':'id','contents':'ID','useable_status':False,'mapping':['identifier','URI','fullTextURL','selfDOI','ISBN','ISSN','NCID','pmid','doi','NAID','ichushi'],'default_display':False},

        {'id':'journal_title','contents':'Journal title','useable_status':False,'mapping':[],'default_display':False},
        {'id':'resource_type','contents':'Resource Type','useable_status':False,'mapping':['Conference','Paper','Departmental','Bulletin',
                                                                                           'Paper','Journal','Article','Article','Book','Presentation',
                                                                                           'Data','or','Dataset','Research','Paper','Technical','Report',
                                                                                           'Thesis','or','Dissertation','Learning','Material','Software'],'default_display':False},
        {'id':'item_type','contents':'Item Type','useable_status':False,'mapping':[],'default_display':False},
        {'id':'language','contents':'Language','useable_status':False,'mapping':['Japanese','English','French','Italian','German','Spanish','Chinese','Russian',
                                                                                 'Latin','Malay','Esperanto','Arabic','Greek','Korean','Other'],'default_display':False},
        {'id':'period','contents':'Period','useable_status':False,'mapping':[],'default_display':False},
        {'id':'academic_degree_date','contents':'Academic degree date','useable_status':False,'mapping':[],'default_display':False},
        {'id':'author_version_flag','contents':'Author version flag','useable_status':False,'mapping':[],'default_display':False},
        {'id':'academic_degree_number','contents':'Academic degree number','useable_status':False,'mapping':[],'default_display':False},
        {'id':'degree_name','contents':'Degree name','useable_status':False,'mapping':[],'default_display':False},
        {'id':'institution_for_academic_degree','contents':'Institution for academic degree','useable_status':False,'mapping':[],'default_display':False},
        {'id':'author_id','contents':'Author id','useable_status':False,'mapping':[],'default_display':False},
        {'id':'index','contents':'Index','useable_status':False,'mapping':[],'default_display':False},
        {'id':'rights','contents':'Rights','useable_status':False,'mapping':['CC','BY','CC','BY-SA','CC','BY-ND','CC','BY-NC','CC','BY-NC-SA','ANY'],'default_display':False}
    ]
}
