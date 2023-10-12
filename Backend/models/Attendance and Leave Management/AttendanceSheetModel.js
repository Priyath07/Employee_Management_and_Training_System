const mongoose = require('mongoose');

const attendanceSheetSchema = new mongoose.Schema({
  employeeName: {
    type: String,
    required: true,
  },
  employeeId: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const AttendanceSheet = mongoose.model('Attendance', attendanceSheetSchema);

module.exports = AttendanceSheet;
