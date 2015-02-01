/*
 * index.js
 * from www.nodebeginner.org
 */

var server = require("./server");
var router = require("./router");

router.init();
server.start(router.route);
