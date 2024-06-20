require('dotenv').config();

module.exports = {
  predefinedAdmin: {
    username: process.env.ADMIN_USERNAME || 'sameer',
    password: process.env.ADMIN_PASSWORD || 'sam987654321'
  },
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS
};
