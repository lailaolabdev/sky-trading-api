const mongoose = require('mongoose');

const comparisonComponentSchema = new mongoose.Schema({
  component: String,
  items: [String],
  createdAt: {Date, default: Date.now},
  createdBy: {Type: mongoose.Schema.Types.ObjectId, ref: 'User'}, 
  updatedBy: {Type: mongoose.Schema.Types.ObjectId, ref: 'User'}, 
  updatedAt: {Date, default: Date.now},
});

module.exports = mongoose.model('ComparisonComponent', comparisonComponentSchema);
