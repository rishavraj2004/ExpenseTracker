const express = require('express');
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render('login', {
        title: 'Login Page'
    });
});

module.exports = app;