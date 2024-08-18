console.log("HELLO WORLD");

var http = require('http')

http.createServer(function (request, response){

    response.writeHead(200, {'Content-Type': 'text/html'})

    response.end('<h1>Hello Node!!!!</h1>\n');
}).listen(3000)

console.log("Server running at http://127.0.0.1:3000/");

var fs = require('fs')
data = fs.readFileSync('welcome.txt');
console.log(data.toString())