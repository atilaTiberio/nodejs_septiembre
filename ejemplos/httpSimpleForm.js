var http = require("http");


http.createServer(function(req,res){


    var body=[];

    req.on("data",function(chunk){
        body.push(chunk);
        console.log(chunk.toString());

    }).on("end",function(){
        body=Buffer.concat(body).toString();
        res.write(body);
        console.log(body);
        res.end();
    });

}).listen(2000);