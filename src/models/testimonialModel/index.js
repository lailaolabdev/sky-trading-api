const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    userName: { type: String},
    userNameEN: { type: String},
    image: { type: String },
    brokerID: { type: mongoose.Schema.Types.ObjectId, ref: 'Broker'},
    ratings: { type: Number},
    reviews: { type: String },
    reviewsEN: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  });
  
  module.exports = mongoose.model('Testimonial', testimonialSchema);
  