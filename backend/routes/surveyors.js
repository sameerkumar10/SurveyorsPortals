const express = require('express');
const router = express.Router();
const Surveyor = require('../models/Surveyor');
const nodemailer = require('nodemailer');
const Form = require('../models/Form');
const auth = require('../middleware/auth');

// Function to send email
const sendEmail = async (email, name, password) => {
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your Surveyor Credentials',
      text: `Hello ${name},\n\nYour credentials are as follows:\nEmail: ${email}\nPassword: ${password}\n\nThank you!`
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error.message);
    throw new Error('Failed to send email');
  }
};

// Register a surveyor
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    console.log('Received data:', { name, email, password });

    if (!name || !email || !password) {
      console.error('Missing required fields:', { name, email, password });
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if email already exists
    const existingSurveyor = await Surveyor.findOne({ email });
    if (existingSurveyor) {
      console.error('Duplicate email error:', email);
      return res.status(400).json({ error: 'Email already exists' });
    }

    const surveyor = new Surveyor({ name, email, password });

    console.log('Surveyor to save:', surveyor);

    await surveyor.save();
    console.log('Surveyor saved successfully:', surveyor);

    // Respond to the client before sending email
    res.status(201).json({ message: 'Surveyor registered successfully' });

    // Try to send email in background
    sendEmail(email, name, password).catch((error) => {
      console.error('Email sending failed after response:', error.message);
    });
  } catch (error) {
    console.error('Error registering surveyor:', error.message, error.code);
    if (error.code === 11000) {
      console.error('Duplicate email error:', error.message);
      return res.status(400).json({ error: 'Email already exists' });
    }
    res.status(500).json({ error: 'Failed to register surveyor', details: error.message });
  }
});

router.post('/allocate-surveys', auth, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied' });
  }

  const { surveyorId, surveyIds } = req.body;

  try {
    const surveyor = await Surveyor.findById(surveyorId);
    if (!surveyor) {
      return res.status(404).json({ message: 'Surveyor not found' });
    }

    const surveys = await Form.find({ _id: { $in: surveyIds } });
    if (!surveys.length) {
      return res.status(404).json({ message: 'No surveys found' });
    }

    const newAllocations = surveys.map(survey => ({
      surveyId: survey._id,
      title: survey.title // Ensure title is included
    }));

    surveyor.allocatedSurveys = [...surveyor.allocatedSurveys, ...newAllocations];
    await surveyor.save();

    console.log('Allocated surveys:', surveyor.allocatedSurveys); // Log allocated surveys for verification

    res.status(200).json({ message: 'Surveys allocated successfully', allocatedSurveys: surveyor.allocatedSurveys });
  } catch (err) {
    console.error('Error allocating surveys:', err);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
});
// Get all surveyors
router.get('/', async (req, res) => {
  try {
    const surveyors = await Surveyor.find();
    res.status(200).json(surveyors);
  } catch (error) {
    console.error('Error fetching surveyors:', error.message);
    res.status(500).json({ error: 'Failed to fetch surveyors' });
  }
});

// Send email to a surveyor
router.post('/send-email', async (req, res) => {
  try {
    const { email } = req.body;

    const surveyor = await Surveyor.findOne({ email });
    if (!surveyor) {
      return res.status(404).json({ error: 'Surveyor not found' });
    }

    await sendEmail(surveyor.email, surveyor.name, surveyor.password);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error.message);
    res.status(500).json({ error: 'Failed to send email' });
  }
});


module.exports = router;
