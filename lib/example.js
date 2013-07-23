
var http = require('http');
var tzone = require('tzone');


var loc = tzone.getLocation();
console.log(loc);


http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end(loc);
}).listen(3333, '127.0.0.1');


console.log('Server running at http://127.0.0.1:3333/');