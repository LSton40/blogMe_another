const authentication = require('express').Router();
const Blogger = require('../models/Blogger');
const {loggedIn} = require('./auxiliary');

// authentication.post('/register', loggedIn, (req, res) => {
//     const {handle, magicword} = req.body;

//     if (!handle || !magicword) {
//         req.session.errors = ['You entered erroneous information. Try again.'];
//         return res.redirect('/register');
//     }

//     Blogger.findOne({
//         where: {
//             handle
//         }
//     })
//     .then(blogger => {
//         if (blogger) {
//             req.session.errors = ['Someone else has that handle.']
//             return res.redirect('./register');
//         }

//     Blogger.create(req.body)
//         .then(new_me => {
//             req.session.save(() => {
//                 req.session.userId = new_me.userId;
//                 res.redirect('/');
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             req.session.errors = err.errors.map(error => error.message);
//             res.redirect('/register');
//         });
//     });
// });

// authentication.post('/login', loggedIn, (req, res) => {
//     const {handle, magicword} = req.body;

//     if (!handle || !magicword) {
//         req.session.errors = ['You entered erroneous information. Try again.'];
//         return res.redirect('/login');
//     }

//     Blogger.findOne({
//         where: {
//             handle
//         }
//     })
//     .then(async blogger => {
//         if (!blogger) {
//             req.session.errors = ['The handle you submitted does not match any blogger we have on record.'];
//             return res.redirect('/login');
//         };

//         const validPassword = await blogger.pwValidate(magicword, blogger.magicword);

//         if (!validPassword) {
//             req.session.errors = ["Stop lying! That's not your password."];
//             res.redirect('/login');
//         }

//         req.session.save(() => {
//             req.session.userId = blogger.userId;
//             res.redirect('/');
//         });
//     })
// });

// //If they're not logged in, they shouldn't see the Dashboard link anyway. 
// //But, if they attempt to go directly to the URL, they are redirected to the login page
// authentication.get('/dashboard', (req, res) => {
//     if (!req.session.userId) return res.redirect('/login')
// })

// authentication.get('/logout', (req, res) => {
//     if (!req.session.userId) return res.redirect('/');

//     req.session.destroy(() => {

//         // setTimeout(() => {
//             res.redirect('/');
//         // }, 5000)
//     });
// })

module.exports = authentication;