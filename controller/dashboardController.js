const Expense = require('../models/expense');

exports.getDashboard = async (req, res) => {

    const expenses = await Expense.find({
        userId: req.session.user._id
    }).sort({ createdAt: -1 });

    const totalExpense = expenses.reduce(
        (sum, expense) => sum + expense.amount,
        0
    );

    res.render('dashboard', {
        user: req.session.user,
        expenses: expenses,
        totalExpense: totalExpense
    });
};

exports.fetchExpense = async (req, res) => {

    const expenses = await Expense.find({
        userId: req.session.user._id
    });

    const totalExpense = expenses.reduce(
        (sum, expense) => sum + expense.amount,
        0
    );

    res.render('dashboard', {
        user: req.session.user,
        expenses,
        totalExpense
    })

}
