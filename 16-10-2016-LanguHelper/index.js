var fs = require('fs');


console.log("----------------------------------Calling Incs----------------------------------");
let contents = fs.readFileSync('index.html', 'utf8');
	contents = contents.replace(/inc\[\[\[.*\]\]\]/ig, value=> fs.readFileSync(value.replace(/inc\[\[\[|\]\]\]/ig,''),'utf8') );
/**********************************************************************/


console.log("----------------------------------replacing the tt functions----------------------------------");
function replace_contents(contents,lang_index){
	return contents.replace( /tt\[\[\[.*\]\]\]/ig, value=> value.replace(/tt\[\[\[|\]\]\]/ig,'').split('###')[lang_index] )
}

let lang1_contents = replace_contents(contents,0);
let lang2_contents = replace_contents(contents,1);
/**********************************************************************/


console.log("----------------------------------Creating the new files----------------------------------");
fs.writeFileSync('index-en.html',lang1_contents);
fs.writeFileSync('index-ar.html',lang2_contents);
// /**********************************************************************/









