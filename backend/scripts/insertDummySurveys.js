const mongoose = require('mongoose');
const Form = require('../models/Form'); // Ensure the correct path to the Form model
const config = require('../config'); // Ensure the correct path to the config

const insertDummySurveys = async () => {
  try {
    await mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

    const dummySurveys = [
      { title: 'Customer Satisfaction Survey', fields: ['How satisfied are you with our service?', 'Would you recommend us to others?'] },
      { title: 'Employee Feedback Survey', fields: ['How do you rate your work environment?', 'Do you feel valued at work?'] },
      { title: 'Product Feedback Survey', fields: ['How satisfied are you with our product?', 'How can we improve our product?'] },
    ];

    await Form.insertMany(dummySurveys);
    console.log('Dummy surveys inserted successfully');
  } catch (err) {
    console.error('Error inserting dummy surveys:', err);
  } finally {
    mongoose.connection.close();
  }
};

insertDummySurveys();
