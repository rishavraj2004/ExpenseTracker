require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo').default;
const User = require('./models/user');


mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("db Connected")
    })
    .catch((err) => {
        console.log("Failed", err);
    })


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