var express = require('express');
var passport = require('passport');
var guard = require(softblu + 'middleware/guard');
var bodyParser = require(softblu + 'middleware/bodyParser');

module.exports = function (router) {
    /**
     * Authenticates a user.
     *
     * @method POST
     * @path /sessions/create
     */
    router.post('/create',
        guard.unauthenticated(),
        bodyParser.urlencoded,

        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/accounts/login',
            failureFlash: 'Invalid username or password.'
        })
    );

    /**
     * Destroys the user's current session.
     *
     * @method GET
     * @path /sessions/destroy
     */
    router.get('/destroy',
        guard.authenticated(),

        function (req, res) {
            req.logout();
            res.redirect('/');
        }
    );

    /**
     * Prints the session information of a visitor.
     *
     * @method GET
     * @path /sessions/debug
     */
    router.get('/debug',
        function (req, res) {
            res.type('json').send({
                session: req.sessionID,
                user: req.user && req.user._id
            });
        }
    );
};