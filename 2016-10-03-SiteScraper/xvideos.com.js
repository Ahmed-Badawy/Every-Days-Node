var jsdom = require("jsdom");
var fs = require('fs');

var links = [];

//type can be (pornstar_videos || uploader)
function rip_xvideos(name,type,pages_num,callback,callback2){

	fs.writeFileSync(name+'.json','');

	for(var i=0; i<pages_num; i++){
		var link = `http://www.xvideos.com/profiles/${name}/${type}/0/${i}`;
		// console.log(link);
		jsdom.env(
			link,
			["http://code.jquery.com/jquery.js"],
			function (err, window) {
				var $ = window.$;
				var output = [];

				$("div.thumbInside").each(function(key,val){
					// console.log($(this).find('a:first').attr('href'));
					var elm = {};
					elm.link = $(this).find('a:first').attr('href')
					elm.img = $(this).find('img:first').attr('src')
					elm.duration = $(this).find('.duration').html().replace(/[\[\]\(\)\s]/g,'').trim()
					// console.log(elm.duration);
					output.push(elm);
				})
				callback(output,name);
			}
		);
	}

	// console.log("Done! -------------------------------- Vids Num: "+output.length);
}


var output = [];
var final = [];
var callback = function(ans,name){
	// output = output.concat(ans)
	// console.log(output);

	ans.filter(function(elm){
		if(/[h]/ig.test(elm.duration)) return true;
		if(/[sec]/ig.test(elm.duration)) return false;
		if(/^\dmin/ig.test(elm.duration)) return false;
		return true;
	})
	.sort(function(a,b){
		d1 = a.duration.replace(/min/ig,"")
		d2 = b.duration.replace(/min/ig,"")
		// console.log(d1,d2);
		return d1 - d2
	})
	.forEach(function(j){
		if(!j.link) return;
		var link = "http://www.xvideos.com"+j.link;

		fs.appendFileSync(name+'.json',link+";\n");
		// console.log(`${link};`);
		// console.log(`${link} --- ${j.duration}`);
	})

	

	// console.log(links);
	// callback2();
	// console.log("Done! -------------------------------- Vids Num: "+output.length);
}
var callback2 = function(){
	// console.log(final);
	console.log(links);
	console.log("done------------------");
}



var prompt = require('cli-prompt');

var types = {
	1: 'uploader',
	2: 'pornstar_videos'
}
 
prompt('Type ( 1:uploads / 2:pornstar_videos ): ', function (val) {
  var type = types[val];
  prompt('Name of url: ', function (val) {
  	var name = val;
  	prompt('Number of Page: ', function(val){
  		num_of_pages = val;
  		rip_xvideos(name,type,num_of_pages,callback,callback2);
  	} ,err=>console.log(err));
  }, function (err) {
    console.error('unable to read last name: ' + err);
  });
}, function (err) {
  console.error('unable to read first name: ' + err);
});


//------------------------------------------
// console.log(output);
//------------------------------------------



