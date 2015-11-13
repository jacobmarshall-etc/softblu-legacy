var express = require('express');
var namespace = require(softblu + 'util/namespace');
var routes = ['users'];

module.exports = function (router) {
    /**
     * @method GET
     * @url /api/ping
     */
    router.get('/ping', function (req, res) {
        res.status(200).type('text').send('01110000 01101111 01101110 01100111'); // pong
    });

    routes.forEach(function (name) {
        // Register any pre-defined routes (see routes array above)
        namespace(router, '/' + name, require('./' + name));
    });
};