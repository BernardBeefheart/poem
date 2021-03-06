/* 
 * File:   cache.js
 * Author: Bernard
 *
 * Created on 2015-03-10 22:24:45
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

"use strict";

var cache = [];

function test_cache(file_properties) {
	if (!file_properties.cachable) {
		return null;
	} 
	if (cache[file_properties.pathname] === undefined) {
		return null;
	}
	return cache[file_properties.pathname];
}

function set_cache(file_properties, content) {
	if (file_properties.cachable) {
		cache[file_properties.pathname] = content;
	}
}

exports.test_cache = test_cache;
exports.set_cache = set_cache;