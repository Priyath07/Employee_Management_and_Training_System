// routes/salary.js

const express = require('express');
const router = express.Router();
const SalaryRecord = require('../models/SalaryRecord');

// POST route to calculate and store a salary record
router.post('/calculate-salary', async (req, res) => {
  // ... previous code ...

  try {
    const record = new SalaryRecord({
      monthlySalary: monthlySalaryFloat,
      daysWorked: daysWorkedInt,
      dailySalary: parseFloat(dailySalary),
      generatedSalary: parseFloat(generatedSalary),
    });

    const savedRecord = await record.save();
    res.status(201).json(savedRecord);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET route to retrieve all salary records from MongoDB
router.get('/salary-records', async (req, res) => {
  try {
    const records = await SalaryRecord.find();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
