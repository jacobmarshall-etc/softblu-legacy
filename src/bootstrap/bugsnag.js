var bugsnag = require('bugsnag');
var config = require(softblu + 'config');

function init () {
    bugsnag.register(config.bugsnag.key, {
        version: config.version,
        releaseStage: config.bugsnag.releaseStage,
        sendCode: true,

        onUncaughtError: function (err) {
            // Prevent bugsnag from automatically exiting the app on error
        }
    });

    console.log('Registered bugsnag');
}

module.exports = init;