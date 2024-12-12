const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    topic: { type: String},
    topicEN: { type: String},
    description: { type: String},
    descriptionEN: { type: String},
    image: { type: String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  });
  
  module.exports = mongoose.model('Article', articleSchema);
  