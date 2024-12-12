const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
    type: { type: String },
    typeEN: { type: String },
    questionAnswer: { type: Array },
    questionAnswerEN: { type: Array },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  });
  
  module.exports = mongoose.model('FAQ', faqSchema);
  