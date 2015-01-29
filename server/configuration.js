/*
 * configuration.js
 *
 */

var site_root = "../site";
var site_encoding = 'utf8';

function get_file_from_site(pathname) {
	return site_root + pathname;
}

function get_site_encoding() {
	return site_encoding;
}

exports.get_file_from_site = get_file_from_site;
exports.get_site_encoding = get_site_encoding;

