const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  type: { type: String },
  typeEN: { type: String },
  questionAnswer: [
    {
      question: { type: String },
      answer: { type: String }, // Array of strings
    },
  ],
  questionAnswerEN: [
    {
      question: { type: String },
      answer: { type: String },
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
  
  module.exports = mongoose.model('FAQ', faqSchema);
  