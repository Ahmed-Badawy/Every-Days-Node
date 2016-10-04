var fs = require('fs');



/********************************************
    Copy Streams
********************************************/
var input_stream = fs.createReadStream('./users.json')
var writable = fs.createWriteStream('./users-copy.json')
// stream.pipe(process.stdout); //output stream on console.
input_stream.pipe(writable); //write to the second file
//------------------------------------------


/********************************************
    Dublex Streams: (you should telnet here)
********************************************/
var net = require('net');

var server = net.createServer(function(connect){
	var log_file = fs.createWriteStream('msgs.log')

	console.log("Connection Established");

	connect.on('end',function(){
		console.log("Connection Ended");
	})

	connect.write("message 1 \r\n")
	connect.write("message 2 \r\n")
	connect.write("message 3 \r\n")

	connect.pipe(connect).pipe(log_file);
})
//------------------------------------------



server.listen(3000,function(){
	console.log("Server Started");
})
