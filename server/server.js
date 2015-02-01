/*
 * server.js
 * from www.nodebeginner.org
 */

var http = require("http");
var url = require("url");
var router = require("./router");
var port = 8888;


function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    response.writeHead(200, {"Content-Type": router.get_http_header(pathname)});
	route(response, pathname);
  }

  http.createServer(onRequest).listen(port);
  console.log("Server has started.");
}

exports.start = start;
