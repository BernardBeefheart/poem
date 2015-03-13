/*
 * index.js
 * from www.nodebeginner.org
 */
"use strict";

/*
 * l'ordre des require est TRES important!
 * pour l'initialisation
 */

var configuration = require("./server/configuration.js");
var router = require("./server/router");
var server = require("./server/server");

router.init();
server.start(router.route);
