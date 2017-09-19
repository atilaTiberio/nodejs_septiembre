var http = require("http");
var url = require("url");
const puerto=3000;
function start(route, handle) {


    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received. ");

        route(handle, pathname, response, request);
    }


    http.createServer(onRequest).listen(puerto);
    console.log("Server listening %d",puerto);
}

exports.start = start;