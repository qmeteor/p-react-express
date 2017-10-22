/**
 * Created by Bien on 2017-10-21.
 */
const passport = require('passport');

module.exports = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/'); // redirect after authenticated
        }
    );

    app.get('/logout', (req, res) => {
        req.logout();  //passport attaches these methods to the req object.
        res.redirect('/');
    });

    app.get('/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get('/', (req, res) => {
        res.send('Welcome Page');
    });
};