/*
 * index.js
 * from www.nodebeginner.org
 */
"use strict";

var configuration = require("./server/configuration.js");
var router = require("./server/router");
var server = require("./server/server");

// configuration.init();
router.init();
server.start(router.route);
