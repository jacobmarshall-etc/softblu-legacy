var express = require('express');
var bugsnag = require('bugsnag');
var namespace = require(softblu + 'util/namespace');
var routes = ['api'];

module.exports = function (app) {
    // Setup the bugsnag request handler to catch errors
    app.use(bugsnag.requestHandler);

    // Register any static pages/resources stored in the 'static' folder
    app.use(express.static(softblu + '../static'));

    routes.forEach(function (name) {
        // Register any pre-defined routes (see routes array above)
        namespace(app, '/' + name, require('./' + name));
    });

    // Add the actual bugsnag error handler
    app.use(bugsnag.errorHandler);
};