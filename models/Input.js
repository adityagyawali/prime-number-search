const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Input Schema
const InputSchema = new Schema({
  inputNum: {
    type: String,
    required: true,
  },
  foundNum: {
    type: String,
  },
  Date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('input', InputSchema);
