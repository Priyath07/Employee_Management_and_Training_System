const mongoose = require("mongoose");
// Define the schema for the RequestLeave model
const leaveSchema = new mongoose.Schema({
  employeeName: String,
  employeeId:String,
  description:String,
  LeaveRequestType:String
 
});

// Create the RequestLeave model

module.exports = mongoose.model("requestLeave", leaveSchema);
