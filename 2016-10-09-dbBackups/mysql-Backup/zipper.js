// npm install easy-zip -D

var EasyZip = require('easy-zip').EasyZip;
 
//zip a folder 
module.exports = {
	
    zip_folder: function(folder_name,output_file_name){
		var zip5 = new EasyZip();
		zip5.zipFolder(folder_name,function(){
		    zip5.writeToFile(output_file_name);
		})
	}, 

	zip_file: function(file_name,output_file_name){
		var zip3 = new EasyZip();
		zip3.addFile(file_name,file_name,function(){ //pick up somefile.js file & save it inside file.zip with the name main.js
		    zip3.writeToFile(output_file_name);
		});
	}

}