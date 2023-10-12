const mongoose=require( 'mongoose');


const attendanceSchema = new mongoose.Schema({
  employeeName: String,
  employeeId:String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});


module.exports=mongoose.model("attendance",attendanceSchema);
