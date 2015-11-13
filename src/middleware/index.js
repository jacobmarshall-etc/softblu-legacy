var middleware = ['errors', 'session', 'flash'];

var before = [];
var after = [];

middleware.forEach(function (name) {
    var hooks = require('./' + name);

    if (hooks.before) before.push(hooks.before);
    if (hooks.after) after.push(hooks.after);
});

exports.before = function (app) {
    before.forEach(function (hook) {
        hook(app);
    });
};

exports.after = function (app) {
    after.forEach(function (hook) {
        hook(app);
    });
};