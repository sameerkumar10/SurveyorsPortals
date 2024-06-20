const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  fields: {
    type: Array,
    default: []
  },
  createdBy: {
    type: mongoose.Schema.Types.Mixed,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Form', FormSchema);
