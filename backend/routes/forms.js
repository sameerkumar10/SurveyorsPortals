const express = require('express');
const mongoose = require('mongoose'); // Ensure mongoose is imported
const router = express.Router();
const Form = require('../models/Form');
const auth = require('../middleware/auth');

// Route to save the survey form
router.post('/save', auth, async (req, res) => {
  try {
    const { title, elements } = req.body;
    const newForm = new Form({
      title,
      fields: elements,
      createdBy: req.user.id,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    await newForm.save();
    res.status(201).json({ message: 'Survey form saved successfully!', formId: newForm._id });
  } catch (error) {
    console.error('Error saving survey form:', error);
    res.status(500).json({ message: 'Error saving survey form', error: error.message });
  }
});

// Route to fetch a single survey form by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) {
      return res.status(404).json({ message: 'Survey form not found' });
    }
    res.json(form);
  } catch (error) {
    console.error('Error fetching survey form:', error);
    res.status(500).json({ message: 'Error fetching survey form', error: error.message });
  }
});
// Get all forms
router.get('/', auth, async (req, res) => {
  try {
    const forms = await Form.find();
    res.json(forms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;
