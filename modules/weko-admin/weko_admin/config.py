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

WEKO_ADMIN_MANAGEMENT_OPTIONS = {
    'dlt_dis_num_options':[
        {'id': '20', 'contents': '20'},
        {'id': '50', 'contents': '50'},
        {'id': '75', 'contents': '75'},
        {'id': '100', 'contents': '100'}
    ],
    'dlt_dis_num_selected': '20',
    'dlt_index_sort_options':[
        {'id': 'wtl_asc', 'contents': 'Title_Asc'},
        {'id': 'wtl_desc', 'contents': 'Title_Desc'},
        {'id': 'creator_asc', 'contents': 'Creator_Asc'},
        {'id': 'creator_desc', 'contents': 'Creator_Desc'},
        {'id': 'itemType_asc', 'contents': 'ItemType_Asc'},
        {'id': 'itemType_desc', 'contents': 'ItemType_Desc'},
        {'id': 'controlnumber_asc', 'contents': 'ID_Asc'},
        {'id': 'controlnumber_desc', 'contents': 'ID_Desc'},
        {'id': 'upd_asc', 'contents': 'Update_Asc'},
        {'id': 'upd_desc', 'contents': 'Update_Desc'},
        {'id': 'createdate_asc', 'contents': 'Create_Asc'},
        {'id': 'createdate_desc', 'contents': 'Create_Desc'},
        {'id': 'pyear_asc', 'contents': 'Date_of_Issued_Asc'},
        {'id': 'pyear_desc', 'contents': 'Date_of_Issued_Desc'},
        {'id': 'custom_sort_asc', 'contents': 'Custom_Asc'},
        {'id': 'custom_sort_desc', 'contents': 'Custom_Desc'},
    ],
    'dlt_index_sort_selected': 'controlnumber_asc',
    'dlt_keyword_sort_options':[
        {'id': 'wtl_asc', 'contents': 'Title_Asc'},
        {'id': 'wtl_desc', 'contents': 'Title_Desc'},
        {'id': 'creator_asc', 'contents': 'Creator_Asc'},
        {'id': 'creator_desc', 'contents': 'Creator_Desc'},
        {'id': 'itemType_asc', 'contents': 'ItemType_Asc'},
        {'id': 'itemType_desc', 'contents': 'ItemType_Desc'},
        {'id': 'controlnumber_asc', 'contents': 'ID_Asc'},
        {'id': 'controlnumber_desc', 'contents': 'ID_Desc'},
        {'id': 'upd_asc', 'contents': 'Update_Asc'},
        {'id': 'upd_desc', 'contents': 'Update_Desc'},
        {'id': 'createdate_asc', 'contents': 'Create_Asc'},
        {'id': 'createdate_desc', 'contents': 'Create_Desc'},
        {'id': 'pyear_asc', 'contents': 'Date_of_Issued_Asc'},
        {'id': 'pyear_desc', 'contents': 'Date_of_Issued_Desc'},
        {'id': 'custom_sort_asc', 'contents': 'Custom_Asc'},
        {'id': 'custom_sort_desc', 'contents': 'Custom_Desc'},
    ],
    'dlt_keyword_sort_selected': 'pyear_desc',
    'sort_options':{
        'deny':[],
        'allow':[
            {'id': 'wtl_asc', 'contents': 'Title_Asc'},
            {'id': 'wtl_desc', 'contents': 'Title_Desc'},
            {'id': 'creator_asc', 'contents': 'Creator_Asc'},
            {'id': 'creator_desc', 'contents': 'Creator_Desc'},
            {'id': 'itemType_asc', 'contents': 'ItemType_Asc'},
            {'id': 'itemType_desc', 'contents': 'ItemType_Desc'},
            {'id': 'controlnumber_asc', 'contents': 'ID_Asc'},
            {'id': 'controlnumber_desc', 'contents': 'ID_Desc'},
            {'id': 'upd_asc', 'contents': 'Update_Asc'},
            {'id': 'upd_desc', 'contents': 'Update_Desc'},
            {'id': 'createdate_asc', 'contents': 'Create_Asc'},
            {'id': 'createdate_desc', 'contents': 'Create_Desc'},
            {'id': 'pyear_asc', 'contents': 'Date_of_Issued_Asc'},
            {'id': 'pyear_desc', 'contents': 'Date_of_Issued_Desc'},
            {'id': 'custom_sort_asc', 'contents': 'Custom_Asc'},
            {'id': 'custom_sort_desc', 'contents': 'Custom_Desc'},
        ]
    },
    'detail_condition':[
        {'id':'title','contents':'Title','useable_status':False,'mapping':['title'], 'sche_or_attr':[{'id':'title','contents':'title', 'checkStus':False}], 'default_display':False, 'inputType':'text', 'inputVal':'', 'mappingFlg':False, 'mappingName':''},
        {'id':'creator','contents':'Author Name','useable_status':False,'mapping':['creator'], 'sche_or_attr':[{'id':'creator','contents':'creator', 'checkStus':False}],'default_display':False, 'inputType':'text', 'inputVal':'', 'mappingFlg':False, 'mappingName':''},
        {'id':'subject','contents':'Subject','useable_status':False, 'mapping':['BSH','DDC','LCC','LCSH','MeSH','NDC','NDLC','NDLSH','UDC','Other', 'Scival'],
         'sche_or_attr':[{'id':'1','contents':'BSH', 'checkStus':False},
                            {'id':'2','contents':'DDC', 'checkStus':False},
                            {'id':'3','contents':'LCC', 'checkStus':False},
                            {'id':'4','contents':'LCSH', 'checkStus':False},
                            {'id':'5','contents':'MeSH', 'checkStus':False},
                            {'id':'6','contents':'NDC', 'checkStus':False},
                            {'id':'7','contents':'NDLC', 'checkStus':False},
                            {'id':'8','contents':'NDLSH', 'checkStus':False},
                            {'id':'9','contents':'UDC', 'checkStus':False},
                            {'id':'10','contents':'Other', 'checkStus':False},
                            {'id':'11','contents':'Scival', 'checkStus':False}],
         'default_display':False, 'inputType':'text', 'inputVal':'', 'mappingFlg':True, 'mappingName':'sbjscheme'},

        {'id':'spatial','contents':'Region','useable_status':False,'mapping':['spatial'],'default_display':False, 'inputType':'text', 'inputVal':'', 'mappingFlg':False, 'mappingName':''},
        {'id':'des','contents':'Description','useable_status':False,'mapping':['description'],'default_display':False, 'inputType':'text', 'inputVal':'', 'mappingFlg':False, 'mappingName':''},
        {'id':'publisher','contents':'Publisher','useable_status':False,'mapping':['publisher'],'default_display':False, 'inputType':'text', 'inputVal':'', 'mappingFlg':False, 'mappingName':''},
        {'id':'cname','contents':'Contributors','useable_status':False,'mapping':['contributor'],'default_display':False, 'inputType':'text', 'inputVal':'', 'mappingFlg':False, 'mappingName':''},


        {'id':'filedate', 'contents': 'Contents created date', 'useable_status': False, 'mapping': ['date'],
         'sche_or_attr':[{'id':'Accepted','contents':'Accepted', 'checkStus':False},
                            {'id':'Available','contents':'Available', 'checkStus':False},
                            {'id':'Collected','contents':'Collected', 'checkStus':False},
                            {'id':'Copyrighted','contents':'Copyrighted', 'checkStus':False},
                            {'id':'Created','contents':'Created', 'checkStus':False},
                            {'id':'Issued','contents':'Issued', 'checkStus':False},
                            {'id':'Submitted','contents':'Submitted', 'checkStus':False},
                            {'id':'Updated','contents':'Updated', 'checkStus':False},
                            {'id':'Valid','contents':'Valid', 'checkStus':False}],
         'default_display':False, 'inputType':'dateRange', 'inputVal_from':'', 'inputVal_to':'','mappingFlg':True, 'mappingName':'fd_attr'},

        {'id':'format','contents':'Format','useable_status':False,'mapping':['format'],'sche_or_attr':[{'id':'format','contents':'format', 'checkStus':False}],'default_display':False,'inputType':'text', 'inputVal':'', 'mappingFlg':False, 'mappingName':''},

        {'id':'id','contents':'ID','useable_status':False,'mapping':['identifier','URI','fullTextURL','selfDOI','ISBN','ISSN','NCID','pmid','doi','NAID','ichushi'],
        'sche_or_attr':[{'id':'identifier','contents':'identifier', 'checkStus':False},
                        {'id':'URI','contents':'URI', 'checkStus':False},
                        {'id':'fullTextURL','contents':'fullTextURL', 'checkStus':False},
                        {'id':'selfDOI','contents':'selfDOI', 'checkStus':False},
                        {'id':'ISBN','contents':'ISBN', 'checkStus':False},
                        {'id':'ISSN','contents':'ISSN', 'checkStus':False},
                        {'id':'NCID','contents':'NCID', 'checkStus':False},
                        {'id':'pmid','contents':'pmid', 'checkStus':False},
                        {'id':'doi','contents':'doi', 'checkStus':False},
                        {'id':'NAID','contents':'NAID', 'checkStus':False},
                        {'id':'ichushi','contents':'ichushi', 'checkStus':False},
                        ],
         'default_display':False, 'inputType':'text', 'inputVal':'', 'mappingFlg':True, 'mappingName':'id_attr'},

        {'id':'srctitle','contents':'Journal title','useable_status':False,'mapping':['srctitle'],'default_display':False, 'inputType':'text', 'inputVal':'', 'mappingFlg':False, 'mappingName':''},
        {'id':'type','contents':'Resource Type','useable_status':False,'mapping':['Conference','Paper','Departmental','Bulletin',
                                                                                           'Paper','Journal','Article','Article','Book','Presentation',
                                                                                           'Data','or','Dataset','Research','Paper','Technical','Report',
                                                                                           'Thesis','or','Dissertation','Learning','Material','Software'],
                                                                                'check_val':[{'id':'1','contents':'Conference Paper', 'checkStus':False},
                                                                                                {'id':'2','contents':'Departmental Bulletin Paper', 'checkStus':False},
                                                                                                {'id':'3','contents':'Journal Article', 'checkStus':False},
                                                                                                {'id':'4','contents':'Article', 'checkStus':False},
                                                                                                {'id':'5','contents':'Book', 'checkStus':False},
                                                                                                {'id':'6','contents':'Presentation', 'checkStus':False},
                                                                                                {'id':'7','contents':'Data or Dataset', 'checkStus':False},
                                                                                                {'id':'8','contents':'Research Paper', 'checkStus':False},
                                                                                                {'id':'9','contents':'Technical Report', 'checkStus':False},
                                                                                                {'id':'10','contents':'Thesis or Dissertation', 'checkStus':False},
                                                                                                {'id':'11','contents':'Learning Material', 'checkStus':False},
                                                                                                {'id':'12','contents':'Software', 'checkStus':False},
                                                                                                ],
                                                                                'default_display':False,'inputType':'checkbox_list', 'inputVal':'', 'mappingFlg':False, 'mappingName':''},

        {'id':'itemtype','contents':'Item Type','useable_status':False,'mapping':['itemtype'],'check_val':[],'default_display':False, 'inputType':'checkbox_list', 'inputVal':'', 'mappingFlg':False, 'mappingName':''},


        {'id':'lang','contents':'Language','useable_status':False,'mapping':['Japanese','English','French','Italian','German','Spanish','Chinese','Russian', 'Latin','Malay','Esperanto','Arabic','Greek','Korean','Other'],
                                                                            'check_val':[{'id':'jpn','contents':'Japanese', 'checkStus':False},
                                                                                        {'id':'eng','contents':'English', 'checkStus':False},
                                                                                        {'id':'fra','contents':'French', 'checkStus':False},
                                                                                        {'id':'ita','contents':'Italian', 'checkStus':False},
                                                                                        {'id':'deu','contents':'German', 'checkStus':False},
                                                                                        {'id':'spa','contents':'Spanish', 'checkStus':False},
                                                                                        {'id':'zho','contents':'Chinese', 'checkStus':False},
                                                                                        {'id':'rus','contents':'Russian', 'checkStus':False},
                                                                                        {'id':'lat','contents':'Latin', 'checkStus':False},
                                                                                        {'id':'msa','contents':'Malay', 'checkStus':False},
                                                                                        {'id':'epo','contents':'Esperanto', 'checkStus':False},
                                                                                        {'id':'ara','contents':'Arabic', 'checkStus':False},
                                                                                        {'id':'ell','contents':'Greek', 'checkStus':False},
                                                                                        {'id':'kor','contents':'Korean', 'checkStus':False},
                                                                                        {'id':'other','contents':'Other', 'checkStus':False},
                                                                                        ],'default_display':False, 'inputType':'checkbox_list', 'inputVal':'', 'mappingFlg':False, 'mappingName':''},
        {'id':'temporal','contents':'Period','useable_status':False,'mapping':['temporal'],'default_display':False, 'inputType':'text', 'inputVal':'', 'mappingFlg':False, 'mappingName':''},

        {'id':'dategranted','contents':'Academic degree date','useable_status':False,'mapping':['date'], 'default_display':False,  'inputType':'dateRange', 'inputVal_from':'', 'inputVal_to':'','mappingFlg':False, 'mappingName':''},


        {'id':'version','contents':'Author version flag','useable_status':False,'mapping':[],
                                                                                            'options':[
                                                                                                {'id':'accepted','contents':'accepted'},
                                                                                                {'id':'published','contents':'published'},
                                                                                                {'id':'draft','contents':'draft'},
                                                                                                {'id':'submitted','contents':'submitted'},
                                                                                                {'id':'updated','contents':'updated'}
                                                                                            ],'default_display':False,  'inputType':'selectbox', 'inputVal':'', 'mappingFlg':False, 'mappingName':''},
        {'id':'dissno','contents':'Academic degree number','useable_status':False,'mapping':[],'default_display':False, 'inputType':'text', 'inputVal':'', 'mappingFlg':False, 'mappingName':''},

        {'id':'degreename','contents':'Degree name','useable_status':False,'mapping':[],'default_display':False, 'inputType':'text', 'inputVal':'', 'mappingFlg':False, 'mappingName':''},
        {'id':'dgname','contents':'Institution for academic degree','useable_status':False,'mapping':[],'default_display':False, 'inputType':'text', 'inputVal':'', 'mappingFlg':False, 'mappingName':''},
        {'id':'wid','contents':'Author id','useable_status':False,'mapping':[],'default_display':False, 'inputType':'text', 'inputVal':'', 'mappingFlg':False, 'mappingName':''},
        {'id':'iid','contents':'Index','useable_status':False,'mapping':[],'default_display':False, 'inputType':'text', 'inputVal':'', 'mappingFlg':False, 'mappingName':''},
        {'id':'rights','contents':'Rights','useable_status':False,'mapping':['CC','BY','CC','BY-SA','CC','BY-ND','CC','BY-NC','CC','BY-NC-SA','ANY'],
                                                                          'radio_val':[
                                                                            {'id':'CC BY','contents':'CC BY'},
                                                                            {'id':'CC BY-SA','contents':'CC BY-SA'},
                                                                            {'id':'CC BY-ND','contents':'CC BY-ND'},
                                                                            {'id':'CC BY-NC','contents':'CC BY-NC'},
                                                                            {'id':'CC BY-NC-SA','contents':'CC BY-NC-SA'},
                                                                            {'id':'ANY','contents':'ANY'},
                                                                          ],'default_display':False,  'inputType':'radio_list', 'inputVal':'', 'mappingFlg':False, 'mappingName':''}
    ]
}



