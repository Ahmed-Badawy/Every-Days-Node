let $options = {
	files : [
		"index.html",
		"index2.html"
	],
	output_dir : "./build",
	langs: ["-en","-ar","-sp"]
};


var fs = require('fs');

$options.files.forEach(function(file){
	console.log("----------------------------------Calling Incs----------------------------------");
	let contents = fs.readFileSync(file, 'utf8');
		let includes = function(contents){
			return contents.replace(/inc\[\[\[.*\]\]\]/ig, value=> fs.readFileSync(value.replace(/inc\[\[\[|\]\]\]/ig,''),'utf8') );
		}
		for(let i=0;i<=25;i++) contents = includes(contents);

	/**********************************************************************/

	console.log("----------------------------------replacing the tt functions----------------------------------");
	function replace_contents(contents,lang_index){
		return contents.replace( /tt\[\[\[.*\]\]\]/ig, value=> {
			let langs_array = value.replace(/tt\[\[\[|\]\]\]/ig,'').split('###');
			return langs_array[lang_index] || langs_array[0];
		});
	}
	let lagns_content = [];
	$options.langs.forEach( (lang,i)=> lagns_content.push(replace_contents(contents,i)) );
	/**********************************************************************/

	console.log("----------------------------------Creating the new files----------------------------------");
	let file_array = file.split('.');
	let ext = file_array.pop();
	file_array.join('.');
	lagns_content.forEach( (content,i)=> fs.writeFileSync($options.output_dir+"/"+file_array+`${$options.langs[i]}.${ext}`,content) );
	// /**********************************************************************/	
})
