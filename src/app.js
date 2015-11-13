global.softblu = __dirname + '/';

var http = require(softblu + 'bootstrap/http');
var db = require(softblu + 'bootstrap/db');

http();

Promise.all([http.ready]).then(function () {
    console.log('Softblu application started');
});