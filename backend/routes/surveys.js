const express = require('express');
const router = express.Router();
const SurveyResponse = require('../models/SurveyResponse');
const Form = require('../models/Form');
const auth = require('../middleware/auth');
const sendEmail = require('../utils/sendEmail');

// Helper function to sanitize keys
const sanitizeKeys = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(sanitizeKeys);
  }

  return Object.keys(obj).reduce((acc, key) => {
    const sanitizedKey = key.replace(/\./g, '_');
    acc[sanitizedKey] = sanitizeKeys(obj[key]);
    return acc;
  }, {});
};

// Route to handle survey submissions
router.post('/saveSurvey', async (req, res) => {
  try {
    const sanitizedData = sanitizeKeys(req.body);
    console.log('Sanitized Data:', sanitizedData);

    const surveyData = new SurveyResponse({ data: sanitizedData });
    await surveyData.save();
    console.log('Saved Survey Data:', surveyData);
    res.status(201).json({ message: 'Survey data saved successfully!' });
  } catch (error) {
    console.error('Error saving survey data:', error);
    res.status(500).json({ message: 'Error saving survey data', error: error.message });
  }
});

// Validate survey link
router.get('/validate/:linkId', async (req, res) => {
  const { linkId } = req.params;
  try {
    const survey = await Form.findById(linkId);
    if (survey) {
      res.status(200).json({ valid: true });
    } else {
      res.status(404).json({ valid: false });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to get all surveys created by the authenticated surveyor
router.get('/', auth, async (req, res) => {
  try {
    const surveys = await SurveyResponse.find({ createdBy: req.user.id });
    res.json(surveys);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to send a survey link via email
router.post('/:surveyId/send', auth, async (req, res) => {
  const { surveyId } = req.params;
  const { email } = req.body;
  try {
    const survey = await Form.findById(surveyId);
    if (!survey) {
      return res.status(404).json({ message: 'Survey not found' });
    }
    const surveyLink = `[your-frontend-url]/survey/${surveyId}`;
    const subject = 'Please fill out this survey';
    const text = `Please fill out this survey: ${surveyLink}`;

    sendEmail(email, subject, text);
    res.status(200).json({ message: 'Survey link sent successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
