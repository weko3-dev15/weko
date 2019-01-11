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

from flask import Flask
from fpdf import FPDF

header = 'HEADER' #実際はDBから取ってきたオブジェクトが入る
title = 'TITLE' #実際はDBから取ってきたオブジェクトが入る
metadata = 'METADATA' #実際はDBから取ってきたオブジェクトが入る
url = 'URL' #実際はDBから取ってきたオブジェクトが入る
publisher_oa_policy = 'PUBLISHER_OA_POLICY' #実際はDBから取ってきたオブジェクトが入る
footer = 'FOOTER' #実際はDBから取ってきたオブジェクトが入る

###PDFカバーページ生成クラス
class PDF(FPDF):
    ##以下、各表示項目の生成

    #ヘッダー生成
    def header(self):
        #ヘッダーの位置を指定する
        self.set_y(30)
        #フォントの指定
        self.set_font('Arial', 'B', 20)
        #色の指定
        self.set_text_color(128)

    #タイトル生成
    def title(self):
        #
        self.set_font('Times', '', 12)
        # Title
        self.cell(30, 10, title, 1, 1, 'C')

    #メタデータ生成
    def metadata(self):
        self.cell(30, 10, metadata, 1, 1, 'C')

    #URL生成
    def url(self):
        self.cell(30, 10, url, 1, 1, 'C')

    #出版社のOAポリシー
    def publisher_oa_policy(self):
        self.cell(30, 10, publisher_oa_policy, 1, 1, 'C')

    # Page footer
    def footer(self):
        #フッターの位置を指定する
        self.set_y(-30)
        #フォントの指定
        self.set_font('Arial', 'I', 8)
        #色の指定
        self.set_text_color(128)

# インスタンス生成とPDFカバーページの生成
pdf = PDF()
pdf.add_page()
pdf.output('prototype_test.pdf', 'F')
