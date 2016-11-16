var mongoose = require('mongoose');

var ExpenseSchema = new mongoose.Schema({
  category: String,
  date: Date,
  description: String,
  price: Number,
  store: String
});

module.exports = mongoose.model('Expense', ExpenseSchema);