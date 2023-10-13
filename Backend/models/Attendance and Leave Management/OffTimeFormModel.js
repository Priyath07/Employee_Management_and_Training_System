const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OffTimeSchema = new Schema({
    employeeName: String,
    employeeId:String,
    timestamp: {
      type: Date,
      default: Date.now
    }
  });
  
  
  const OffTime = mongoose.model("offTime",OffTimeSchema);

  module.exports = OffTime;