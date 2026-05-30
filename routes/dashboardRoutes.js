const express = require('express');
const router = express.Router();

const isAuth = require('../middleware/isAuth');

router.get('/dashboard', isAuth, (req, res) => {
    res.render('dashboard', {
        user: req.session.user
    });
});

module.exports = router;