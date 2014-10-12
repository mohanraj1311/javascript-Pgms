/*
This pgm shows how to create a webserver in JS
*/

// This var statement is just like the import statement in java or python.
// Only difference is we can directly store it into a variable and that variable can be 
// used to call different functions defined in the module.

var http = require('http');

/* create a server using the http object created above.
createServer is function defined in the http module.
It takes in a call back function and returns a new object,
thats the server itself.
*/

http.createServer(function(req, res){
	console.log("I am in the call back function now!");
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('Hello World\n');
}).listen(8090, '127.0.0.1');

console.log('Server running at port 8080');
