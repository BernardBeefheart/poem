/*
 * configuration.js
 *
 */
var fs = require('fs');

var site_root = "../site";
var site_encoding = 'utf8';
var port = 8888;
var jsconfig = '../config/mainconfig.json';

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
	try {
		console.log("loading configuration");
		var config_data = JSON.parse(fs.readFileSync(jsconfig, 'utf8'));
		site_root = config_data.site_root;
		port = config_data.port;
		site_encoding = config_data.site_encoding;
		console.log("init_configuration done <" + config_data + ">");
	} 
	catch (err) {
		console.error("ERR " + err + " Cannot read configuration file " + jsconfig);
	}
}

init_configuration();

exports.init_configuration = init_configuration;
exports.get_file_from_site = get_file_from_site;
exports.get_site_encoding = get_site_encoding;
exports.get_port = get_port;

