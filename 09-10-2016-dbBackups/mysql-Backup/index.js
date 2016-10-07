// npm install mysqldump -D

var mysqlDump = require('mysqldump');

var db_name = 'courtaks_maindb';
var zip_backups = true;


mysqlDump({
    host: 'localhost',
    user: 'root',
    password: '',
    database: db_name,
    // tables:['players'], // only these tables (optional)
    // where: {'players': 'id < 1000'}, // Only test players with id < 1000  (optional)
    // ifNotExist:true, // Create table if not exist  (optional)
    dest: `./backups/${db_name}.sql` // destination file 
},function(err){
    // create data.sql file; 
    console.log(err);
})



if(zip_backups){
    var zipper = require('./zipper');
// //     zipper.zip_folder('./backups','output.zip');
    // zipper.zip_file(`backups/${db_name}.sql`,'backups/zipped_file.zip');
}


