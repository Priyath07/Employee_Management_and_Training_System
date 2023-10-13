// routes/attendance.js
const express = require('express');
const router = express.Router();
const OffTime = require('../../models/Attendance and Leave Management/OffTimeFormModel')

// Create a new attendance record
router.post('/OffTimeadd', async (req, res) => {
    try {
      const offtime = new OffTime(req.body);
      await offtime.save();
      res.status(201).json(offtime);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

// Read all attendance
router.get('/offTimeDis', async (req, res) => {
  try {
    const offtime = await OffTime.find();
    res.json(offtime);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
