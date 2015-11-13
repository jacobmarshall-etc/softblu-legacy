/**
 * Creates a deferred promise.
 *
 * @returns {Object}
 */
module.exports = function deferred () {
    var resolve, reject;

    var promise = new Promise(function () {
        resolve = arguments[0];
        reject = arguments[1];
    });

    return {
        promise: promise,
        resolve: resolve,
        reject: reject
    };
};