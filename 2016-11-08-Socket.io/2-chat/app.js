var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 8000;

app.use(express.static(path.join(__dirname, "public")));

io.on('connection', function(socket) {
  console.log('new connection made');

  socket.on('message-from-client', function(data) {
      socket.emit('message-from-server', {
        msg: data.msg,
        person: data.person
      });    
  });

});

server.listen(port, function() {
  console.log("Listening on port " + port);
});




