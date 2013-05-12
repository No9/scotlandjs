var net = require('net')
var es  = require('es')
var Doc = require('crdt').Doc

var A = new Doc()

var stream
(stream = net.connect(9999))
  .pipe(A.createStream())
  .pipe(stream)
  

A.on('create', function(row){
  		console.log(row)
})