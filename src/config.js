exports.version = require('../package.json').version;

exports.httpPort = process.env.PORT || 5000;
exports.databaseUrl = process.env.DB || 'mongodb://localhost/softblu';
exports.sessionSecret = process.env.SESSION_SECRET;

exports.bugsnag = {
    key: process.env.BUGSNAG_KEY,
    releaseStage: process.env.BUGSNAG_RELEASE_STAGE || 'production'
};