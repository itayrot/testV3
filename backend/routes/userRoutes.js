// routes/userRoutes.js
const express = require('express');
const { getAllUsers, getUsers } = require('../controllers/userController');
const router = express.Router();

// Route to get all users
router.get('/', getAllUsers);

// Route to create a new user
// router.post('/', createUser);

module.exports = router;
