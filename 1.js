var node_torrent = require('nt');
var fs = require('fs');

var rs = node_torrent.make('http://localhost:8080/', __dirname + '/files');
rs.pipe(fs.createWriteStream('helloworld.torrent'))
 .on('close', function(){
 	console.log("Torrent Descriptor Created")
 });