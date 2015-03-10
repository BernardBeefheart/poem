/* 
 * File:   mimetype.js
 * Author: bernard
 *
 * Created on 04/02/2015 20:30
 * 
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


var http_head = [];
var http_head_inited = false;

function init() {
	function decryptfile(filecontent) {

	}
	function on_file(err, filecontent) {
		if (err) {
			console.log('ERROR: ' + err);
		} else {
			decryptfile(filecontent);
			console.log("MIME loaded!");
		}
	}
	var filename = "MIME";


	console.log("loading MIME...");
	fs.readFile(filename,
			"utf8",
			on_file);
	
}