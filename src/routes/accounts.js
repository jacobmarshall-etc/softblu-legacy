var guard = require(softblu + 'middleware/guard');
var bodyParser = require(softblu + 'middleware/bodyParser');
var User = require(softblu + 'model/user');

module.exports = function (router) {
    /**
     * Renders a login page for an unauthenticated user.
     *
     * @method GET
     * @path /accounts/login
     */
    router.get('/login',
        guard.unauthenticated(),
        function (req, res) {
            res.render('accounts/login', {
                message: req.flash('error')
            });
        }
    );

    /**
     * Renders a create account page for an unauthenticated user.
     *
     * @method GET
     * @path /accounts/create
     */
    router.get('/create',
        guard.unauthenticated(),

        function (req, res) {
            res.render('accounts/create', {
                message: req.flash('error')
            });
        }
    );

    /**
     * @method POST
     * @path /account/create
     */
    router.post('/create',
        guard.unauthenticated(),
        bodyParser.urlencoded,

        function (req, res) {
            User.create({
                name: req.body.username,
                password: req.body.password
            }, function (err, user) {
                if (err) {
                    req.flash('error', err);
                    res.redirect('/accounts/create');
                } else {
                    req.login(user, function () {
                        res.redirect('/');
                    });
                }
            });
        }
    );

    /**
     * Redirects the user to the sessions destroy endpoint.
     *
     * @method GET
     * @path /accounts/logout
     */
    router.get('/logout',
        function (req, res) {
            res.redirect('/sessions/destroy');
        }
    );
};