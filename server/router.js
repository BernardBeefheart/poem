/*
 * router.js
 * from www.nodebeginner.org
 */

var http = require("http");
var configuration = require("./configuration.js");
var fs = require('fs');
var path = require('path');
var cache = require('./cache');

var http_head = [];
var http_head_inited = false;

function init() {
	http_head[".html"] = ["text/html", configuration.get_site_encoding()];
	http_head[".css"] = ["text/css", configuration.get_site_encoding()];
	http_head[".png"] = ["image/png", null];
	http_head[".jpg"] = ["image/jpeg", null];
	http_head[".jpeg"] = ["image/jpeg", null];
	http_head[".js"] = ["application/javascript", null];
}

function get_file_properties(pathname) {
	var fprops = {
		pathname: pathname,
		extension: null,
		mime_type: 'text/plain',
		encoding: null
	};
	var ext = path.extname(pathname).toLocaleLowerCase();
	var hh = http_head[ext];
	fprops.extension = ext;
	if (hh !== undefined) {
		fprops.mime_type = hh[0];
		fprops.encoding = hh[1];
	}
	return fprops;
}

function route(response, pathname) {
	var filename = configuration.get_file_from_site(pathname);
	var fprops = get_file_properties(filename);
	var filecontent = cache.test_cache(fprops);
	function on_file(err, filecontent) {
		if (err) {
			console.error('ERROR: ' + err);
		} else {
			response.write(filecontent);
			cache.set_cache(filename, filecontent);
		}
		response.end();
	}

	console.log("About to route a request for " + pathname);
	console.log("	real filename is " + filename);
	response.writeHead(200, {"Content-Type": fprops.mime_type});
	if (filecontent) {
		response.write(filecontent);
		response.end();
	} else {
		fs.readFile(filename,
				fprops.encoding,
				on_file);
	}
}


exports.route = route;
exports.init = init;

