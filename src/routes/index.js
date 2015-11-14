var express = require('express');
var namespace = require(softblu + 'util/namespace');

var routes = [
    'api',
    'accounts',
    'sessions'
];

module.exports = function (app) {
    // Register any static pages/resources stored in the 'static' folder
    app.use(express.static(softblu + '../static'));

    routes.forEach(function (name) {
        // Register any pre-defined routes (see routes array above)
        namespace(app, '/' + name, require('./' + name));
    });

    console.log('Registered %s top level routes (%s)', routes.length, routes.join(', '));
};