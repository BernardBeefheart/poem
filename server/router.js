/*
 * router.js
 * from www.nodebeginner.org
 */

var configuration = require("./configuration.js");
var fs = require('fs');

function on_file(err, filecontent) {
	if (err) {
		console.log('ERROR: ' + err);
	} else {
 		console.log("content >>");
		console.log(filecontent);
		console.log("<< content");
	}
}

function route(pathname) {
	var filename = configuration.get_file_from_site(pathname);
	console.log("About to route a request for " + pathname);
	console.log("	real filename is " + filename);
	fs.readFile(filename, 
			configuration.get_site_encoding(),
			on_file);
}

exports.route = route;
