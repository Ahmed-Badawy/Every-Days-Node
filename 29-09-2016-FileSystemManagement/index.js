var fs = require('fs');



var obj = {
	one: [1,'two','three'],
	two: [4,'five','six'],
};
var json_string = JSON.stringify(obj);



//Check existance & delete the file    && fs.exists() works for both files & folders... 

	// fs.exists('2.txt', function(exists){
	// 	if(exists){
	// 		fs.unlink("2.txt");
	// 		console.log("File Deleted!");
	// 	}
	// });
// OR
	if (fs.existsSync('2.txt')) {
	    console.log("Found The File");
	    // fs.unlink("2.txt");
	    fs.unlinkSync("2.txt");
	    console.log("File Deleted!");   
	}




//writing to a file: 
	// fs.writeFile("created_file.txt", json_string , function(err) {
	//     if(err) throw err;
	//     console.log("New file was Created!");
	// }); 
//Or	
	fs.writeFileSync('created_file.txt',json_string);
	console.log("New file was Created!");



//Append to file
	// fs.appendFile('created_file.txt','append what', function(err) {
 //  		if (err) throw err;
	// });
//OR
	fs.appendFileSync('created_file.txt','Appended text');
	console.log("file data appended");



//Reading a file:
	// fs.readFile('created_file.txt', 'utf8', function (err,data) {
	//   if (err) { return console.log(err) }
	//   console.log("data was read & it's contents is: ",data);
	// });
//Or
	var contents = fs.readFileSync('created_file.txt', 'utf8');
	console.log("data was read & it's contents is: ",contents);



//rename a file:
	// fs.rename('created_file.txt','2.txt',function(err){
	// 	if(err) console.log('ERROR: '+err);
	// 	console.log("file renamed!");
	// });
	fs.renameSync('created_file.txt','2.txt');
	console.log("file renamed!");



//delete a folder
	var deleteFolderRecursive = function(path){
	  if( fs.existsSync(path) ) {
	    fs.readdirSync(path).forEach(function(file,index){
	      var curPath = path + "/" + file;
	      if(fs.lstatSync(curPath).isDirectory()) { // recurse
	        deleteFolderRecursive(curPath);
	      } else { // delete file
	        fs.unlinkSync(curPath);
	      }
	    });
	    fs.rmdirSync(path);
	  }
	};

//Create a folder if not exists
// fs.exists(path, function(exists) {
//     if (exists) {
//         // Do something
//     }
// });
	if (fs.existsSync('newFolderName')) {
		console.log("Folder Exists. so i will delete it first. then recreate it.");
	    deleteFolderRecursive('newFolderName');
	}

console.log("making folderName Directory");
	fs.mkdir("folderName"); //creating folder

console.log("adding file 1.txt inside the folder");
	fs.writeFileSync('./folderName/1.txt','hello world'); 

console.log("rename the folder");
	fs.rename("./folderName","./newFolderName"); 

console.log('deleting the folder');
	deleteFolderRecursive('./newFolderName');




