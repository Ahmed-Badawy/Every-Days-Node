var mysql = require('mysql');

var connection = mysql.createConnection({
	host:'localhost',
	user: 'root',
	password: '',
	database: 'testnode',
	multipleStatments: false //this is
})

connection.connect();


function safe_param(param){ return connection.escape(param) } // remove inner sql

var post = {
	title: safe_param("First Post"),
	content: safe_param("this is the content area"),
	writer_id: 5
}


function insert(){
	var query = connection.query("insert into posts set ?", post, function(err,result){
		if(err){ console.error(err); return; } //output error then stop the function
		console.log(query.sql);
		console.log(result);
	})
}

function select(){
	var query = connection.query("select * from posts", function(err,result){
		if(err){ console.error(err); return; } //output error then stop the function
		console.log(query.sql);
		// console.log(result);

		result.forEach(function(res){
			console.log(res);
		})

	})
}


insert();
// select();
