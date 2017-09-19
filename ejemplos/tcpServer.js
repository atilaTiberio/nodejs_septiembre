
var net = require("net");
var telnetServer= net.createServer();

var puerto=9000;

telnetServer.on("connection",function(client){

    client.name =  'Puerto: ' + client.remotePort;
    client.write("<--"+client.name+"\n");
    client.end();
});

telnetServer.listen(puerto);

console.log("Escuchando puerto: %d",puerto);
