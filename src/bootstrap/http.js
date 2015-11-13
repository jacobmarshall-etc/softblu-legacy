var express = require('express');
var config = require(softblu + 'config');
var deferred = require(softblu + 'util/deferred');
var routes = require(softblu + 'routes');
var ready = deferred();
var app;

function init () {
    app = express();
    routes(app);

    app.listen(config.httpPort, function (err) {
        if (err) {
            console.log('Failed to bind web server port');
            ready.reject(err);
        } else {
            console.log('Web server listening for requests');
            ready.resolve(app);
        }
    });

    return ready.promise;
}

module.exports = init;
module.exports.ready = ready.promise;