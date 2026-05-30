require("dotenv").config();
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const User = require('./models/user');
const MongoDBStore = require('connect-mongodb-session')(session);

const app = express();
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log("db Connected")
    })
    .catch((err) => {
        console.log("Failed", err);
    })

const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions',

})

app.use(session({ secret: 'my secret', resave: false, saveUninitialized: false, store: store }))

app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRoutes);

app.use(express.static('public'));
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
    res.redirect('/auth/login');
});

module.exports = app;