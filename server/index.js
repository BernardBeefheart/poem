/*
 * index.js
 * from www.nodebeginner.org
 */

var server = require("./server");
var router = require("./router");

server.start(router.route);
