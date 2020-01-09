var http = require('http');

function fibonacci(n) {
   return n < 1 ? 0
        : n <= 2 ? 1
        : fibonacci(n - 1) + fibonacci(n - 2);
}


var server = http.createServer(function(request, response) {
    fibonacci(30)
    console.log(process.env.TEST)
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello world in production, yes! " + process.env.TEST + "thib");  
});

var port = 80;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
