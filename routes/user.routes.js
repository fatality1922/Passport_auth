const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
    req.user ? res.render('logged', {username: req.user.displayName, avatar: req.user.photos[ 0 ].value}) : res.redirect('/user/no-permission');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', (req, res) => {
    req.user ? res.render('profile') : res.redirect('/no-permission');
});

router.get('/profile/settings', (req, res) => {
    req.user ? res.render('profileSettings') : res.redirect('/no-permission');
});
module.exports = router;