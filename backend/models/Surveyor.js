const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SurveyorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'surveyor' },
  allocatedSurveys: [{
    surveyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Form' },
    title: { type: String }
  }]
});
SurveyorSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const Surveyor = mongoose.model('Surveyor', SurveyorSchema);

module.exports = Surveyor;
