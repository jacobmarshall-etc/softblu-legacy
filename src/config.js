exports.version = require('../package.json').version;

exports.httpPort = process.env.PORT;
exports.databaseUrl = process.env.DB;

exports.bugsnag = {
    key: process.env.BUGSNAG_KEY,
    releaseStage: process.env.BUGSNAG_RELEASE_STAGE || 'production'
};