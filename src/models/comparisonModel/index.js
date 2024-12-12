const mongoose = require('mongoose');

const comparisonsSchema = new mongoose.Schema({
  brokerID: { type: mongoose.Schema.Types.ObjectId, ref: 'Broker' },
  regulations: { type: [String] },
  educationResourcesEN: { type: String },
  educationResourcesLA: { type: String },
  tradingPlatforms: { type: [String] },
  minimumDeposit: { type: Number },
  depositAndWithdrawFee: { type: String },
  leverage: { type: String },
  spread: { type: String },
  orderExecution: { type: String },
  customerSupport: { type: String },
  introduceBrokerFeeEN: { type: String },
  introduceBrokerFeeLA: { type: String },
  depositMethods: { type: String },
  tradingAfterDepositEN: { type: String },
  tradingAfterDepositLA: { type: String },
  rating: { type: Number },
  descriptionEN: { type: String },
  description: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
});

module.exports = mongoose.model('Comparisons', comparisonsSchema);
