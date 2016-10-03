var jsdom = require("jsdom");


//type can be (pornstar_videos || uploader)
function rip_xvideos(name,type,pages_num,callback,callback2){
	output = [];

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

				callback(output);
				if( (pages_num - i) == 2) callback2();
			}
		);
	}
	// console.log("Done! -------------------------------- Vids Num: "+output.length);
}


var output = [];
var final = [];
var callback = function(ans){
	// output = output.concat(ans)
	// console.log(output);
	ans.filter(function(elm){
		if(/[sec]/ig.test(elm.duration)) return false;
		if(/^\dmin$/ig.test(elm.duration)) return false;
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
		j.link = j.link.replace(/\/prof-video-click\/pornstar\/jesse-jane\//i,'')
		var link = "http://www.xvideos.com/video"+j.link;
		console.log(`${link};`);
		// console.log(`${link} --- ${j.duration}`);
	})
	// console.log("Done! -------------------------------- Vids Num: "+output.length);
}
var callback2 = function(){
	// console.log(final);
	console.log("done------------------");
}
rip_xvideos('jesse-jane','pornstar_videos',10,callback,callback2);
// console.log(output);
//------------------------------------------
