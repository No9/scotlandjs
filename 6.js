var nt = require('nt');
var fs = require('fs');
var net = require('net');
var es  = require('es');
var Doc = require('crdt').Doc;
var A = new Doc();

var BTClient = require('node-torrent');
var service = {}; 


net.createServer(function (stream) {
  stream
    .pipe(A.createStream())
    .pipe(stream);
}).listen(9999);

watcher = require('watch-tree').watchTree(__dirname + '/content/helloworld', {'sample-rate': 5});

watcher.on('fileCreated', function(path) {
		

		var rs = nt.make('http://localhost:8080', __dirname + '/content/helloworld');
		rs.pipe(fs.createWriteStream('helloworld.torrent'))
		 .on('close', function(){ 
			
			fs.readFile('helloworld.torrent', 'binary', function (err, content) {
		 		
				var row = { name    : 'content/helloworld', file : content }
				A.add(row);
		    });

			console.log("Torrent Descriptor Created")
		 	
			    service = new BTClient({
			    logLevel: 'DEBUG',
			    clientId: 'helloworldID',
			    portRangeStart: 10000,
			    downloadPath: __dirname + "/content/helloworld",
			    authorizer: null
			  });

			var torrent = service.addTorrent('helloworld.torrent');
		 });
});