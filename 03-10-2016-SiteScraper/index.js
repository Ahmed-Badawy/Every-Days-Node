var jsdom = require("jsdom");


	var link = "http://ahmed-badawy.com/site";

	jsdom.env(
		link,
		["http://code.jquery.com/jquery.js"],
		function (err, window) {
			var $ = window.$;
			var output = [];

			$("li>a").each(function(key,val){
				output.push(val.text);
			});

			callback(output);
		}
	);



function callback(output){
	console.log(output);
}


