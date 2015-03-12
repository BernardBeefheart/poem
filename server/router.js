/*
 * router.js
 * from www.nodebeginner.org
 */
"use strict";

var fs = require('fs');
var path = require('path');

var configuration = require("./configuration.js");
var cache = require('./cache');

var http_head = [];
var http_head_inited = false;

function init() {
    http_head['.html'] = ['text/html', configuration.get_site_encoding(), false];
    http_head['.css'] = ['text/css', configuration.get_site_encoding(), true];
    http_head['.png'] = ['image/png', null, false];
    http_head['.jpg'] = ['image/jpeg', null, false];
    http_head['.jpeg'] = ['image/jpeg', null, false];
    http_head['.js'] = ['application/javascript', null, true];
    http_head['.json'] = ['application/json', null, true];
}

function get_file_properties(pathname) {
    var fprops = {
        pathname: pathname,
        extension: null,
        mime_type: 'text/plain',
        encoding: null,
        cachable: false
    },
    ext = path.extname(pathname).toLocaleLowerCase(),
            hh = http_head[ext];
    fprops.extension = ext;
    if (hh !== undefined) {
        fprops.mime_type = hh[0];
        fprops.encoding = hh[1];
        fprops.cachable = hh[2];
    }
    return fprops;
}

function route(response, pathname) {
    var filename = configuration.get_file_from_site(pathname),
            fprops = get_file_properties(filename),
            filecontent = cache.test_cache(fprops);

    function on_file(err, filecontent) {
        if (err) {
            console.error('ERROR: ' + err);
        } else {
            response.write(filecontent);
            cache.set_cache(fprops, filecontent);
        }
        response.end();
    }

    console.log("About to route a request for " + pathname + "	real filename is " + filename);
    response.writeHead(200, {"Content-Type": fprops.mime_type});
    if (filecontent) {
        response.write(filecontent);
        response.end();
    } else {
        fs.readFile(filename,
                fprops.encoding,
                on_file);
    }
}


exports.route = route;
exports.init = init;

