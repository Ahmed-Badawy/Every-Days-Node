var fs = require('fs');



var obj = {
	one: [1,'two','three'],
	two: [4,'five','six'],
};
var json_string = JSON.stringify(obj);




//Check existance & delete the file
	fs.exists('2.txt', function(exists){
		if(exists){
			fs.unlink("2.txt");
			console.log("File Deleted!");
		}
	});

//writing to a file: 
	fs.writeFile("created_file.txt", json_string , function(err) {
	    if(err){
	        return console.log(err);
	    }
	    console.log("New file was Created!");
	}); 


//Reading a file:
	fs.readFile('created_file.txt', 'utf8', function (err,data) {
	  if (err) {
	    return console.log(err);
	  }
	  console.log("data was read & it's contents is: ",data);
	});


//rename a file:
	fs.rename('created_file.txt','2.txt',function(err){
		if(err) console.log('ERROR: '+err);
		console.log("file renamed!");
	});



var dir = "folderName";

fs.stat(dir, function (err, stats){
  if (err) {
    console.log('Folder doesn\'t exist, so I made the folder');
    fs.mkdir(dir, err=>console.log(err) ); //creating folder
  }
  if (!stats.isDirectory()) {
    console.log('temp is not a directory!');
  } else {
    console.log('Folder Does exist');
  }
});

