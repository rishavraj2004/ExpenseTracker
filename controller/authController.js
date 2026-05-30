const bcrypt = require('bcryptjs');
const User = require('../models/user')
const { path } = require("../app")

exports.getLogin = (req, res, next) => {




    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: false
    })
}

exports.postLogin = (req, res, next) => {

    req.session.isLoggedIn = true
    res.redirect('/');
}

exports.getSignup = (req, res, next) => {
    res.render('auth/register', {
        path: '/signup',
        pageTitle: 'Signup',


    });
};
exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email })
        .then(user => {

            if (!user) {
                console.log('User not found');
                return res.redirect('/auth/login');
            }

            return bcrypt.compare(password, user.password)
                .then(doMatch => {

                    if (!doMatch) {
                        console.log('Wrong password');
                        return res.redirect('/auth/login');
                    }

                    req.session.isLoggedIn = true;
                    req.session.user = user;

                    req.session.save(err => {
                        console.log('Session save error:', err);
                        res.redirect('/dashboard');
                    });
                });
        })
        .catch(err => {
            console.log(err);
        });
};



exports.postSignup = (req, res, next) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    if (password !== confirmPassword) {
        return res.redirect('/auth/signup');
    }

    User.findOne({ email: email })
        .then(userDoc => {
            if (userDoc) {
                return res.redirect('/auth/login');
            }

            return bcrypt.hash(password, 12)
                .then(hashedPassword => {
                    const user = new User({
                        firstName,
                        lastName,
                        email,
                        password: hashedPassword
                    });

                    return user.save();
                });
        })
        .then(() => {
            res.redirect('/auth/login');
        })
        .catch(err => {
            console.log(err);
        });
};


exports.postLogout = (req, res, next) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
}