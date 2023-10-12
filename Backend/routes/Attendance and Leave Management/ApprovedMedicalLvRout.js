
const express = require('express');
const router = express.Router();
const AMLeave = require('../../models/Attendance and Leave Management/ApprovedmedicalLvModel');

router.post('/addAM', async (req, res) => {
    try {
      const AMleave = new AMLeave(req.body);
      await AMleave.save();
      res.status(201).json(AMleave);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

router.get('/AM', async (req, res) => {
    try {
      const AMleaves = await AMLeave.find();
      res.json(AMleaves);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  module.exports = router; // Export the router
