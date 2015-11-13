var express = require('express');

/**
 * Handles creating a nested namespace from an express router.
 *
 * @param {express.Router} parent
 * @param {String} path
 * @param {Function} bootstrap
 * @returns {express.Router}
 */
module.exports = function namespace (parent, path, bootstrap) {
    var router = express.Router();
    parent.use(path, router);
    bootstrap(router);
    return router;
};