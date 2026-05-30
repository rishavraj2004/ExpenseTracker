const express = require('express');
const router = express.Router();

const Expense = require('../models/expense');
const isAuth = require('../middleware/isAuth');

const expenseController = require('../controller/expenseController')

router.post('/expenses/add', isAuth, expenseController.addExpense);

router.post('/expenses/delete/:expenseId', isAuth, expenseController.deleteExpense);


router.get(
    '/expenses/edit/:expenseId',
    isAuth,
    expenseController.editExpense
);

router.post(
    '/expenses/edit/:expenseId',
    isAuth,
    expenseController.postExpense
);


module.exports = router;