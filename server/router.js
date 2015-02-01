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
	http_head[".html"] = ["text/html", configuration.get_site_encoding()];
	http_head[".png"] = ["image/png", null];
	http_head[".jpg"] = ["image/jpeg", null];
	http_head[".jpeg"] = ["image/jpeg", null];
}

function get_http_header(pathname) {
	var ext = path.extname(pathname).toLocaleLowerCase();
	var hh = http_head[ext];
	if (hh === undefined) {
		return "text/plain";
	} else {
		return hh[0];
	}
}

function get_encoding(pathname) {
	var ext = path.extname(pathname).toLocaleLowerCase();
	var hh = http_head[ext];
	if (hh === undefined) {
		return null;
	} else {
		return hh[1];
	}
}
function route(response, pathname) {
	function on_file(err, filecontent) {
		if (err) {
			console.log('ERROR: ' + err);
		} else {
			response.write(filecontent);
			console.log("content >>");
		}
		response.end();
	}
	var filename = configuration.get_file_from_site(pathname);


	console.log("About to route a request for " + pathname);
	console.log("	real filename is " + filename);
	fs.readFile(filename,
			get_encoding(pathname),
			on_file);
}


exports.route = route;
exports.init = init;
exports.get_http_header = get_http_header;

