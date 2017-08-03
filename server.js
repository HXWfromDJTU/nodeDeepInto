/**
 * Created by harlin on 2017/7/28.
 */
var http = require('http');

http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});

    response.end('Hello World\n I was sent back by nodejsServer')
}).listen(1112);

console.log("the server has been lunched!!Sunq");