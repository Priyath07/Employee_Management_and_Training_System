const express = require('express');

// controller functions
const {
  loginUser,
  signupUser,
  getAllUser,
  getUserById,
} = require('../../../controllers/userController');

const router = express.Router();

// login route
router.post('/login', loginUser);

// signup route
router.post('/signup', signupUser);

// getall route
router.get('/', getAllUser);

// getall route
router.get('/:id', getUserById);

module.exports = router;
