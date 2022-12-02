const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  'Risk Score': {
    type: String,
    default: '0',
  },
  'Nigerian Stocks':{
    type: String,
  },
  'Foreign Stocks': {
    type: String
  },
  'Tech Stocks': {
    type: String
  },
  'Emerging Stocks': {
    type: String
  },
  'Nigerian Bonds': {
    type: String
  },
  'Commodities': {
    type: String
  },
  'Real Estate': {
    type: String
  },
  'T-Bills': {
    type: String
  },
  'Alternative': {
    type: String
  }
});

const Portfolio = mongoose.model("portfolio", schema);
module.exports = Portfolio;