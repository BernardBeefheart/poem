/*
 * router.js
 * from www.nodebeginner.org
 */

var http = require("http");
var configuration = require("./configuration.js");
var fs = require('fs');
var path = require('path');

var http_head = [];
var http_head_inited = false;

function init() {
	http_head[".html"] = "text/html";
	http_head[".png"] = "image/png"
	http_head[".jpg"] = "image/jpeg"
	http_head[".jpeg"] = "image/jpeg"
}

function get_http_header(pathname) {
	var ext = path.extname(pathname).toLocaleLowerCase();
	var hh = http_head[ext];
	if (hh === undefined) {
		hh = "text/plain";
	}
}

function route(response, pathname) {
	function on_file(err, filecontent) {
		if (err) {
			console.log('ERROR: ' + err);
		} else {
			console.log("content >>");
			console.log(filecontent);
			response.write(filecontent);
			console.log("<< content");
		}
		response.end();
	}
	var filename = configuration.get_file_from_site(pathname);


	console.log("About to route a request for " + pathname);
	console.log("	real filename is " + filename);
	fs.readFile(filename,
			configuration.get_site_encoding(),
			on_file);
}


exports.route = route;
exports.init = init;
exports.get_http_header = get_http_header;

