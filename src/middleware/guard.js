/**
 * Redirects the user to another page if they're not authenticated.
 *
 * Options:
 *  - failureRedirect (String)
 *
 * @param {Object} [options]
 * @returns {Function}
 */
exports.authenticated = function (options) {
    return function (req, res, next) {
        if (req.isUnauthenticated()) {
            res.redirect(options && options.failureRedirect || '/accounts/login');
        } else {
            next();
        }
    };
};

/**
 * Redirects the user to another page if they're authenticated.
 *
 * Options:
 *  - failureRedirect (String)
 *
 * @param {Object} [options]
 * @returns {Function}
 */
exports.unauthenticated = function (options) {
    return function (req, res, next) {
        if (req.isAuthenticated()) {
            res.redirect(options && options.failureRedirect || '/');
        } else {
            next();
        }
    };
};