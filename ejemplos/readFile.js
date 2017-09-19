var http=require("http");
var fs=require("fs");

var procesaRequest=function(request,response){
    console.log(request.url);

    fs.readFile(request.url,function(err,data){

        if(err){
            response.write("File not found");
            response.end();
        }
        else{
            response.write(data);
            response.end();
        }
    });

}


http=http.createServer(procesaRequest);
http.listen(8080);