const express = require('express');
const router = express.Router();
const DLLeave = require('../../models/Attendance and Leave Management/ApprovedDutyLvModel');

router.post('/addDL', async (req, res) => {
    try {
      const DLleave = new DLLeave(req.body);
      await DLleave.save();
      res.status(201).json(DLleave);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

router.get('/DL', async (req, res) => {
    try {
      const DLleave = await DLLeave.find();
      res.json(DLleave);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  module.exports = router; // Export the router
