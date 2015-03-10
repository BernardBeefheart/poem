/*
 * index.js
 * from www.nodebeginner.org
 */

var server = require("./server");
var router = require("./router");
var configuration = require("./configuration.js");

// configuration.init_configuration();
router.init();
server.start(router.route);
