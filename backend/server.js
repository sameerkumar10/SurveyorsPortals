const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const formsRoutes = require('./routes/forms');
const surveysRoutes = require('./routes/surveys');
const surveyorRoutes = require('./routes/surveyors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/forms', formsRoutes);
app.use('/api/surveys', surveysRoutes);
app.use('/api/surveyors', surveyorRoutes);

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
  .catch(err => console.log('MongoDB connection error:', err));
