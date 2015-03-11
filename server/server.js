/*
 * server.js
 * from www.nodebeginner.org
 */

var http = require("http");
var url = require("url");
var router = require("./router");
var configuration = require("./configuration.js");


function start(route) {
	var port = process.env.PORT || configuration.get_port();

	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		if (pathname === '/') {
			pathname = '/index.html';
		}
		console.log("Request for " + pathname + " received.");
		route(response, pathname);
	}

	http.createServer(onRequest).listen(port);
	console.log("Server has started on port " + port);
}

exports.start = start;
