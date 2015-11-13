global.softblu = __dirname + '/';

var http = require(softblu + 'bootstrap/http');
var db = require(softblu + 'bootstrap/db');

http();
db();

Promise.all([http.ready, db.ready]).then(function () {
    console.log('Softblu application started');
});