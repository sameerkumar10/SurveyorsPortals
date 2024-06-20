const express = require('express');
const router = express.Router();
const { predefinedAdmin } = require('../config');
const User = require('../models/User');
const Surveyor = require('../models/Surveyor');
const Form = require('../models/Form');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

router.post('/admin/login', async (req, res) => {
  const { username, password } = req.body;

  if (
    username === predefinedAdmin.username &&
    password === predefinedAdmin.password
  ) {
    const token = jwt.sign(
      { id: 'admin', username: predefinedAdmin.username, role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Surveyor login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const surveyor = await Surveyor.findOne({ email }).populate('allocatedSurveys');
    if (!surveyor) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, surveyor.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { id: surveyor._id, role: 'surveyor' },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Profile
router.get('/profile', auth, async (req, res) => {
  try {
    let user;
    if (req.user.role === 'admin') {
      user = await User.findById(req.user.id).select('-password');
    } else {
      user = await Surveyor.findById(req.user.id)
        .select('-password')
        .populate('allocatedSurveys'); // Populate allocated surveys
    }
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
