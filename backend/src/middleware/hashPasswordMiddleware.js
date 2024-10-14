const bcrypt = require('bcryptjs');

// Middleware to hash password
const hashPasswordMiddleware = async (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: 'Password is required' });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword; // Replace password with hashed password in request body
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error hashing password' });
  }
};

module.exports = hashPasswordMiddleware;
