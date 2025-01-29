const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: { type: String, minlength: 3, required: true, unique: true,  trim: true },
  email: { type: String, required: true,unique: true, lowercase: true,  trim: true },
  role: { type: String, enum: ['STAFF'], default: 'STAFF'},
  password: { type: String, required: true },
  profileImage: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
