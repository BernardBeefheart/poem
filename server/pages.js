/* 
 * File:   pages.js
 * Author: bernard
 *
 * Created on 2015-03-10, 16:14:57
 */
/* 
 * The MIT License
 *
 * Copyright 2015 bernard.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var fs = require('fs');

function load_json_file(filename) {
	console.log('loading json file: ' + filename);
	return JSON.parse(fs.readFileSync(filename, 'utf8'));
}

function json_menu_to_html(menu) {
	if (menu !== null) {
		var len = menu.length;
		var html = '';
		for (var i=0; i<len; i++) {
			html += '<a href="' + menu[i].file + '">' + menu[i].title + '</a>';
		}
		return html;
				
	} else {
		return null;
	}
}

exports.load_json_file = load_json_file;
exports.json_menu_to_html = json_menu_to_html;

