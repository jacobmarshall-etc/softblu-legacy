var bodyParser = require('body-parser');

exports.urlencoded = bodyParser.urlencoded({ extended: false });
exports.json = bodyParser.json();

// Can be enabled for global parsing (not recommended)
exports.before = function (app) {
    app.use(exports.urlencoded);
    app.use(exports.json);
};