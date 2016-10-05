var http = require('http');
var fs = require('fs');


var list_of_files = [
	{file:"file.ogv", link: "http://ahmed-badawy.com/site/public/site-docs/home-page-bg/vid.ogv"},
	{file:"myimg.jpg", link: "http://ahmed-badawy.com/cv/img/me1.jpg"},
	{file:"background.jpg", link: "http://ahmed-badawy.com/cv/img/background3.jpg"},
];

//download a list files
for(var i=0;i<list_of_files.length;i++){
	item = list_of_files[i];
	download_a_file('downloads/'+item.file, item.link);
}


function download_a_file(file_name,link){
	var file = fs.createWriteStream( file_name );
	var link = link;
	var request = http.get(link, function(response) {
	  response.pipe(file);
	});		
}