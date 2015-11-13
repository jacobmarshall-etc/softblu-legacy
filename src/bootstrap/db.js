var mongoose = require('mongoose');
var config = require(softblu + 'config');
var deferred = require(softblu + 'util/deferred');
var ready = deferred();
var db;

function init () {
    mongoose.connect(config.databaseUrl);
    db = mongoose.connection;

    db.on('error', function (err) {
        console.log('Failed to establish connection with database');
        ready.reject(err);
    });

    db.once('open', function () {
        console.log('Connection to database established');
        ready.resolve(db);
    });

    return ready.promise;
}

module.exports = init;
module.exports.ready = ready.promise;
module.exports.connection = mongoose.connection;