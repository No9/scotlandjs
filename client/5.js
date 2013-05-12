var net = require('net')
var es  = require('es')
var fs = require('fs')
var Doc = require('crdt').Doc
var A = new Doc()

var Client = require('node-torrent');
var client = new Client({logLevel: 'DEBUG'});

var stream
(stream = net.connect(9999))
  .pipe(A.createStream())
  .pipe(stream)
  

A.on('create', function(row){
  		console.log(row)
		        fs.writeFile('helloworld.torrent', new Buffer(row.state.file, 'binary'), 'binary', function (err) {
			        if(err) {
			          console.log('CRDT: error saving torrent')
			          return;
			        }
			        var torrent = client.addTorrent('helloworld.torrent');
			        torrent.on('complete', function() {
				    		console.log('complete!');
			        		torrent.files.forEach(function(file) {
				    			console.log(file.name)	
      				})
		    });
		});
})

