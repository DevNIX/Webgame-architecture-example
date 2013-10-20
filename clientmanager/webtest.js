var Class = require('es5class');
var http = require('http');

WebServer = Class.define(
	'WebServer',
	{
		construct: function() {
			http.createServer(function (request, response) {
				response.writeHead(200, {'Content-Type': 'text/html'});
				response.end('Hello <b>World</b>\n');
			}).listen(8000);

			console.log('Server running at http://127.0.0.1:8000/');
		}
	}
);

exports.WebServer = WebServer;