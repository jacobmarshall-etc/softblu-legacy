var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require(softblu + 'model/user');

passport.use(new LocalStrategy(
    function (username, password, done) {
        User.findOne({ name: username }, function (err, user) {
            if (err) {
                // Error fetching the user (db down, etc...)
                done(err);
            } else if ( ! user) {
                // No user with the specified username
                done(null, false, { message: 'Incorrect username.' });
            } else if ( ! user.validatePassword(password)) {
                // Invalid password provided for the user
                done(null, false, { message: 'Incorrect password.' });
            } else {
                // Successfully authenticated
                done(null, user);
            }
        });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

exports.before = function (app) {
    app.use(passport.initialize());
    app.use(passport.session());

    console.log('Registered passport & passport session middleware');
};