
const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
  employeeName: {
    type: String,
  },
  employeeId: {
    type: String,
  },
  description: {
    type: String,
  },
  LeaveRequestType: {
    type: String,
  },
  // Add a field for file upload
  document: {
    type :String,
    
  },
});

module.exports = mongoose.model("requestLeave", leaveSchema);
