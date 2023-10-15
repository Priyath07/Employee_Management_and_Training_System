
const express = require('express');
const router = express.Router();
const Leave = require('../../models/Attendance and Leave Management/RequestLeave');
const path = require('path');
const fs = require('fs');
const multer =  require('multer')

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Create file upload
router.post('/add', upload.single('document'), async (req, res) => {
  try {
    console.log(req.body);
    const leave = new Leave({
      employeeName: req.body.employeeName,
      employeeId: req.body.employeeId,
      description: req.body.description,
      LeaveRequestType: req.body.LeaveRequestType,
      // Set document data and content type from the uploaded file
     
    });

    await leave.save();
    res.status(201).json(leave);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// Create a new person
router.post('/add', async (req, res) => {
  try {
    const leave = new Leave(req.body);
    await leave.save();
    res.status(201).json(leave);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Read all persons
router.get('/', async (req, res) => {
  try {
    const leaves = await Leave.find();
    res.json(leaves);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//update
router.put('/update/:Id', async (req, res) => {
  try {
    const leave = await Leave.findByIdAndUpdate(req.params.Id, req.body, { new: true });
    if (!leave) {
      return res.status(404).json({ error: "Leave request not found" });
    }
    res.status(200).json(leave);
  } catch (err) {
    res.status(500).json({ error: "Error with updating leave request data" });
  }
});

// Delete a leave request by ID
router.delete('/delete/:id', async (req, res) => {
  try {
    const leave = await Leave.findByIdAndDelete(req.params.id);
    if (!leave) {
      return res.status(404).json({ error: "Leave request not found" });
    }
    res.status(200).json({ status: "Leave request deleted" });
  } catch (err) {
    res.status(500).json({ error: "Error with deleting leave request data" });
  }
});



module.exports = router;

  
