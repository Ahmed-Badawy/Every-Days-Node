// npm install easy-zip -D

var EasyZip = require('easy-zip').EasyZip;
 
var zip = new EasyZip();
//add text  
zip.file('hello.txt','Hello World！');
zip.writeToFile('text.zip');//write zip data to disk 
 
//add folder 
var zip2 = new EasyZip();
var jsFolder = zip2.folder('js');
jsFolder.file('hello.js','alert("hello world")');
zip2.writeToFile('folder.zip');
 
//add file 
var zip3 = new EasyZip();
zip3.addFile('main.js','somefile.js',function(){ //pick up somefile.js file & save it inside file.zip with the name main.js
    zip3.writeToFile('file.zip');
});


//batch add files 
var files = [
    {source : 'somefile.js',target:'main.js'},
    {target : 'img'},//if source is null,means make a folder 
    {source : 'somefile.js',target:'lib/tmp.js'}
];
var zip4 = new EasyZip();
zip4.batchAdd(files,function(){
    zip4.writeToFile('batchadd.zip');
});
 
//zip a folder 
var zip5 = new EasyZip();
zip5.zipFolder('./somefolder',function(){
    zip5.writeToFile('folderall.zip');
});
 
// write data to http.Response 
// zip.writeToResponse(response,'attachment.zip'); 
 
// //write to file sync  
// //zip.writeToFileSycn(filePath); 