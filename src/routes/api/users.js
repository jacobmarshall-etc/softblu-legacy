var express = require('express');
var User = require(softblu + 'model/user');

module.exports = function (router) {
    /**
     * An example route which returns all users in the database.
     *
     * Note: This route makes no excuses of being insecure - it does no additional
     * authorisation checks beforehand. It's just an example.
     *
     * @method GET
     * @path /api/users
     */
    router.get('/', function (req, res, next) {
        User.find(function (err, users) {
            if (err) {
                next(new Error('Could not fetch list of users'));
            } else {
                res.send({
                    result: users
                });
            }
        });
    });
};