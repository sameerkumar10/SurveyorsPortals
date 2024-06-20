const mongoose = require('mongoose');

const surveyResponseSchema = new mongoose.Schema({
  data: {
    type: Map,
    of: mongoose.Schema.Types.Mixed,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('SurveyResponse', surveyResponseSchema);
