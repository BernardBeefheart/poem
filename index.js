/*
 * index.js
 * from www.nodebeginner.org
 */
"use strict";

var server = require("./server/server");
var router = require("./server/router");
var configuration = require("./server/configuration.js");

// configuration.init_configuration();
router.init();
server.start(router.route);
