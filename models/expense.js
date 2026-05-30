const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const expenseSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },

        amount: {
            type: Number,
            required: true
        },

        spentOn: {
            type: String,
            required: true
        },

        note: {
            type: String
        },

        createdAt: {
            type: Date,
            default: Date.now
        }
    }
);

module.exports = mongoose.model('Expense', expenseSchema);