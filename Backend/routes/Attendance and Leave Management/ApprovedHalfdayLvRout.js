const express = require('express');
const router = express.Router();
const HDLeave = require('../../models/Attendance and Leave Management/ApprovedHalfDayLvModel');

router.post('/addHD', async (req, res) => {
    try {
      const HDleave = new HDLeave(req.body);
      await HDleave.save();
      res.status(201).json(HDleave);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

router.get('/HDdis', async (req, res) => {
    try {
      const HDleave = await HDLeave.find();
      res.json(HDleave);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  module.exports = router; // Export the router
