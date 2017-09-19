var http = require('http');
var fs = require('fs');
var formidable = require("formidable");
var util = require('util');



var server = http.createServer(function (req, res) {

    if (req.method.toLowerCase() == 'get') {
        cargaForma(res);

    } else if (req.method.toLowerCase() == 'post') {
        procesaForma(req, res);

    }

});

function cargaForma(res) {

    fs.readFile('form.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}

function procesaForma(req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {

        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        res.write('Formulario Recibido:\n\n');

        res.end(util.inspect({
            fields: fields,
            files: files
        })+"\n");
    });
}



server.listen(3000);
console.log("server listening on 3000");