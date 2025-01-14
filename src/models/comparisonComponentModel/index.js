const mongoose = require('mongoose');

const comparisonComponentSchema = new mongoose.Schema({
  component: String,
  componentNo: {
    type: Number,
    unique: true,
    required: true,
    index: true
  },
  items: [String],
  createdAt: {type: Date, default: Date.now},
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('ComparisonComponent', comparisonComponentSchema);
