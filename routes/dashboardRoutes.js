const express = require('express');
const router = express.Router();

const isAuth = require('../middleware/isAuth');
const Expense = require('../models/expense');
const dashboardController = require('../controller/dashboardController');



router.get('/dashboard', isAuth, dashboardController.fetchExpense);
// router.get('/dashboard', isAuth, dashboardController.getDashboard);

module.exports = router;