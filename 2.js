var nt = require('nt');
var fs = require('fs');


var net = require('net');
var Doc = require('crdt').Doc;
var A = new Doc();

// Problem Officer? This now fires when app starts
var rs = nt.make('http://localhost:8080', __dirname + '/files');

 net.createServer(function (stream) {
  stream
    .pipe(A.createStream())
    .pipe(stream)
}).listen(9999);

rs.pipe(fs.createWriteStream('helloworld.torrent'))
 .on('close', function(){ 

 	fs.readFile('helloworld.torrent', 'base64', function (err, content) {
 	
 		console.log("Torrent Descriptor Created")
		var row = { name    : 'helloworld.torrent', torrent : content }
		A.add(row);
    });
 });
    
