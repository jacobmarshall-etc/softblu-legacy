var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var config = require(softblu + 'config');
var db = require(softblu + 'bootstrap/db');

exports.before = function (app) {
    app.use(session({
        secret: config.sessionSecret,
        store: new MongoStore({
            mongooseConnection: db.connection
        }),
        resave: false, // deprecated option
        saveUninitialized: true
    }));

    console.log('Registered express session middleware (mongodb)');
};