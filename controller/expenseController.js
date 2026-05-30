const Expense = require('../models/expense');

exports.addExpense = async (req, res) => {

    try {

        await Expense.create({
            userId: req.session.user._id,
            amount: req.body.amount,
            spentOn: req.body.spentOn,
            note: req.body.note
        });

        res.redirect('/dashboard');

    } catch (err) {
        console.log(err);
    }

}


exports.deleteExpense = async (req, res) => {

    const expenseId = req.params.expenseId;

    await Expense.findOneAndDelete({
        _id: expenseId,
        userId: req.session.user._id
    });

    res.redirect('/dashboard');
}


exports.editExpense = async (req, res) => {

    const expense = await Expense.findOne({
        _id: req.params.expenseId,
        userId: req.session.user._id
    });

    res.render('edit-expense', {
        expense
    });
}

exports.postExpense = async (req, res) => {

    const expense = await Expense.findOne({
        _id: req.params.expenseId,
        userId: req.session.user._id
    });

    expense.amount = req.body.amount;
    expense.spentOn = req.body.spentOn;
    expense.note = req.body.note;

    await expense.save();

    res.redirect('/dashboard');
}