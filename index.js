var http = require('http');

var server = http.createServer(function(request, response) {
    console.log(process.env)
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello world in production, yes!  " + process.env.TEST);

});

var port = 80;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
