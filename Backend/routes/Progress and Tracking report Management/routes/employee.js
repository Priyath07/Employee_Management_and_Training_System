const express = require('express');

// controller functions
const {
  loginEmployee,
  signupEmployee,
  getAllEmployees,
  getEmployeeById,
} = require('../../../controllers/employeeController');

const router = express.Router();

// login route
router.post('/login', loginEmployee);

// signup route
router.post('/signup', signupEmployee);

// getall route
router.get('/', getAllEmployees);

// getall route
router.get('/:id', getEmployeeById);

module.exports = router;
