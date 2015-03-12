/*
 * configuration.js
 *
 */
"use strict";

var pages = require('./pages');
var ConfigData = require('./ConfigData.js');

var config_data = null;

var main_menu = null;

var jsconfig = './config/mainconfig.json';
var jsmain_menu = '/mainmenu.json';

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

function init() {
	try {
		var data = pages.load_json_file(jsconfig);
        config_data = new ConfigData(data.site_name, data.port, data.site_root, data.site_encoding);
		console.log("loading configuration ok <" + config_data.site_root + '>');
		try {
			console.log("loading main menu ...");
			main_menu = pages.load_json_file(config_data.get_file_from_site(jsmain_menu));
			console.log("loading main menu ok");
		}
		catch (err) {
            config_data = new ConfigData("poem", 8887, "../site", "utf8");
			console.error("ERR " + err + " Cannot read main menu file " + jsconfig);
		}
	}
	catch (err) {
		console.error("ERR " + err + " Cannot read configuration file " + jsconfig);
	}
}

init();

// exports.init= init;
exports.config_data = config_data;
exports.get_site_encoding = get_site_encoding;
exports.get_port = get_port;
exports.get_main_menu_in_HTML = get_main_menu_in_HTML;
