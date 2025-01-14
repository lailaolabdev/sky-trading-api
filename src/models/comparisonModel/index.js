const mongoose = require('mongoose');

const comparisonsSchema = new mongoose.Schema({
  brokerID: { type: mongoose.Schema.Types.ObjectId, ref: 'Broker' },
  regulations: { type: [String] },
  educationResources: { type: String },
  educationResourcesEN: { type: String },
  tradingPlatforms: { type: [String] },
  tradableInstruments: { type: [String] },
  minimumDeposit: { type: Number },
  depositAndWithdrawFee: { type: [String] },
  leverage: { type: String },
  spread: { type: String },
  orderExecution: { type: String },
  orderExecutionEN: { type: String },
  customerSupport: { type: [String] },
  introduceBrokerFee: { type: String },
  introduceBrokerFeeEN: { type: String },
  depositMethods: { type: [String] },
  tradingAfterDeposit: { type: String },
  tradingAfterDepositEN: { type: String },
  rating: { type: Number },
  description: { type: String },
  descriptionEN: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
});

module.exports = mongoose.model('Comparisons', comparisonsSchema);
