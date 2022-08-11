exports.loggedIn = function (req, res, next) {
    const userId = req.session.userId;
    const authRoute = req.path.match(/register|login/gi);

    if (authRoute && userId) {
        return res.redirect('/');
    }

    next();
}