/**
 * HTTP CLIENT
 */
var static = require( 'node-static' ),
    portC = 8094,
    http = require( 'http' );

// config
var file = new static.Server( './public/', {
    cache: 0,
    gzip: true
} );
// serve
http.createServer( function ( request, response ) {
    request.on( 'end', function () {
        file.serve( request, response );
    }).resume();
}).listen( portC );