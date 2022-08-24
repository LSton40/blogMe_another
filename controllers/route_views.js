const router = require('express').Router();
const {loggedIn} = require('./auxiliary');

const Blogger = require('../models/Blogger');

// router.get('/', loggedIn, (req, res) => {
//     const userId = req.session.userId;

//     if (userId) {
//         return Blogger.findOne({
//             where: {
//                 id: userId
//             },
//             attributes: ['id', 'handle']
//         })
//         .then(blogger => {
//             blogger = {
//                 handle: blogger.handle,
//             };
//             res.render('index', {blogger});
//         });
//     }
//     res.render('index');
// });

// router.get('/login', loggedIn, (req, res) => {
//     res.render('login', {errors: req.session.errors});
// });

// router.get('/register', loggedIn, (req, res) => {
//     res.render('register', {errors: req.session.errors});
// });

module.exports = router;