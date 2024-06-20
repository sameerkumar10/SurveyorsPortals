const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role === 'admin') {
      req.user = { id: 'admin', role: 'admin' };
    } else {
      req.user = { id: decoded.id, role: 'surveyor' };
    }
    next();
  } catch (err) {
    res.status(401).json({ message: 'Please authenticate.' });
  }
};
