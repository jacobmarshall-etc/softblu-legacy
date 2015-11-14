var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    password: String
});

/**
 * Validates a password against the user.
 *
 * @param {String} password
 * @returns {Boolean}
 */
userSchema.methods.validatePassword = function (password) {
    return this.password === password;
};

/**
 * Attempts to create a new user (returns null if user exists).
 *
 * @param {Object} info
 * @param {Function} callback
 */
userSchema.statics.create = function (info, callback) {
    User.findOne({ name: info.name }, function (err, existing) {
        if (err || existing) {
            callback(err ?
                'Unable to validate request' :
                'User already exists');
        } else {
            var user = new User({
                name: info.name,
                password: info.password
            });

            user.save(function (err) {
                if (err) {
                    callback('Could not create user');
                } else {
                    callback(null, user);
                }
            });
        }
    });
};

var User = mongoose.model('user', userSchema);

module.exports = User;