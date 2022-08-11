const router = require('express').Router();
const {loggedIn} = require('./auxiliary');

const Blogger = require('../models/Blogger');

router.get('/', loggedIn, (req, res) => {
    const userId = req.session.userId;

    if (userId) {
        return Blogger.findOne({
            where: {
                id: userId
            },
            attributes: ['id', 'remittance', 'handle']
        })
        .then(blogger => {
            blogger = {
                handle: blogger.handle,
                remittance: blogger.remittance
            };
            res.render('index', {blogger});
        });
    }
    res.render('idnex');
});

router.get('/login', loggedIn, (req, res) => {
    res.render('login', {errors: req.session.errors});
});

router.get('/register', loggedIn, (req, res) => {
    res.render('register', {errors: req.session.errors});
});

module.exports = router;