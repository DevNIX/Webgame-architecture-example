var net = require('net');

var PORT = 5400;
var GameServers = [];

console.log("Gameserver listener ready");

var Listener = net.createServer();
Listener.listen(PORT);

Listener.on('connection', function(socket) {
	console.log("¡A new gameserver has connected!");

	socket.write("id");
	console.log("Asking for identification");


	socket.on('data', function (data) {
		var data = data.toString();
		console.log(" > received: "+ data);

		if (data.substring(0, 4) == 'id: ') {
			var id = data.substring(4, data.length);
			console.log("Registered server with id "+ id);

			socket.clientId = id;

			GameServers[id]  = {
				ip: socket.ip
			}
		} else if (data == 'echo servers')
			console.log(GameServers);
	});

	socket.on('end', function () {
		delete GameServers[socket.clientId];
  	});


  	socket.on('error', function (exc) {
  		console.log(exc);
  		if (exc.code == "ECONNRESET") {
  			console.log("Gameserver crashed, removing object");
  			delete GameServers[socket.clientId];
  		}
	    console.log("ignoring exception: " + exc);
	});
});

/*GameServer = Class.define(
	'GameServer',
	{
		construct: function() {

		},
		server
	}
);*/
