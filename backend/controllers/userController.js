const User = require('../models/User');

// Register new user
exports.registerUser = async (req, res) => {
  const { name, email, role } = req.body;

  try {
    const user = new User({ name, email, role });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all users (admin-only access simulated)
exports.getUsers = async (req, res) => {
  const isAdmin = req.headers['x-admin'] === 'true';

  if (!isAdmin) return res.status(403).json({ message: 'Access denied' });

  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
