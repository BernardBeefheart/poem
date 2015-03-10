/*
 * configuration.js
 *
 */

var site_root = "../site";
var site_encoding = 'utf8';
var port = 8888;

function get_file_from_site(pathname) {
	return site_root + pathname;
}

function get_site_encoding() {
	return site_encoding;
}

function get_port() {
	return port;
}

function init_configuration() {
	console.log("init_configuration done")
}

exports.init_configuration = init_configuration;
exports.get_file_from_site = get_file_from_site;
exports.get_site_encoding = get_site_encoding;
exports.get_port = get_port;

