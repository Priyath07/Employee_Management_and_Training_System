const mongoose = require('mongoose')
const Schema= mongoose.Schema;

const ApprovedHalfdayLvSchema = new Schema({
    employeeName: String,
    employeeid: String,
    description:String,
    LeaveRequestType:String
})

const ApprovedHalfDayLvModel = mongoose.model("approvedhalfdayLv",ApprovedHalfdayLvSchema);

module.exports = ApprovedHalfDayLvModel;