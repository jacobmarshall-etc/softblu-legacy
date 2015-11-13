var bugsnag = require('bugsnag');

exports.before = function (app) {
    // Setup the bugsnag request handler to catch errors
    app.use(bugsnag.requestHandler);

    console.log('Registered bugsnag.requestHandler middleware');
};

exports.after = function (app) {
    // Add the actual bugsnag error handler
    app.use(bugsnag.errorHandler);

    console.log('Registered bugsnag.errorHandler middleware');
};