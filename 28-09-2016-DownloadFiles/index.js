//download a file
	var http = require('http');
	var fs = require('fs');
	var file = fs.createWriteStream("file.ogv");
	var link = "http://ahmed-badawy.com/site/public/site-docs/home-page-bg/vid.ogv";
	var request = http.get(link, function(response) {
	  response.pipe(file);
	});