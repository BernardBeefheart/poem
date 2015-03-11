/*
 * configuration.js
 *
 */

var pages = require('./pages');

var config_data = {
	"site_name": "poem",
	"port": 8887,
	"site_root": "../site",
	"site_encoding": "utf8"
};

var main_menu = null;

var jsconfig = './config/mainconfig.json';
var jsmain_menu = '/mainmenu.json';

function get_file_from_site(pathname) {
	return config_data.site_root + pathname;
}

function get_site_encoding() {
	return config_data.site_encoding;
}

function get_port() {
	return config_data.port;
}

function get_main_menu() {
	return main_menu;
}

function get_main_menu_in_HTML() {
	return pages.json_menu_to_html(main_menu);
}

function init_configuration() {
	try {
		console.log("loading configuration ...");
		config_data = pages.load_json_file(jsconfig);
		console.log("loading configuration ok");
		try {
			console.log("loading main menu ...");
			main_menu = pages.load_json_file(get_file_from_site(jsmain_menu));
			console.log("loading main menu ok");
		}
		catch (err) {
			console.error("ERR " + err + " Cannot read main menu file " + jsconfig);
		}
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
exports.get_main_menu_in_HTML = get_main_menu_in_HTML;
