// routes/attendance.js
const express = require('express');
const router = express.Router();
const Attendance = require('../../models/Attendance and Leave Management/AttendanceFormModel')

// Create a new attendance record
router.post('/add', async (req, res) => {
    try {
      const attendance = new Attendance(req.body);
      await attendance.save();
      res.status(201).json(attendance);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

// Read all attendance
router.get('/', async (req, res) => {
  try {
    const attendances = await Attendance.find();
    res.json(attendances);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/upload/:attendanceId', async (req, res) => {
  const attendanceId = req.params.attendanceId; 
  const {
    employeeName,
    employeeId,
    description,
    LeaveRequestType,
  } = req.body;
 const updateAttendence={
  employeeName,
  employeeId,
  description,
  LeaveRequestType,

 }
  try {
    const updatedAttendance = await Attendance.findByIdAndUpdate(
      attendanceId,updateAttendence);
    if (!updatedAttendance) {
      return res.status(404).json({ error: "Attendance not found" });
    }

    res.status(200).json({ status: "Attendance updated", updatedAttendance });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error with updating attendance data" });
  }
});


module.exports = router;
