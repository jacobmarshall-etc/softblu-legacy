var flash = require('connect-flash');

exports.before = function (app) {
    app.use(flash());
};