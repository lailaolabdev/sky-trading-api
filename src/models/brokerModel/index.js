const mongoose = require('mongoose');

const brokerSchema = new mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: { type: String},
    nameEN: { type: String},
    subtitle: { type: String},
    subtitleEN: { type: String},
    foundedYear: { type: String},
    brokerLink: { type: String },
    logo: { type: String },
    isRecommended: { type: Boolean, default: false },
    top: { type: Number, default: 0, limit: 10 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  });
  
  module.exports = mongoose.model('Broker', brokerSchema);
  