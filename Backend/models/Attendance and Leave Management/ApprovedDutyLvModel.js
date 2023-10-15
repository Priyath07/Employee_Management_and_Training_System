const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ApprovedDutyLvSchema = new Schema({
    employeeName: String,
    employeeId:String,
    description:String,
    LeaveRequestType:String
})

const ApprovedDutyLvModel = mongoose.model("approveddutyLv",ApprovedDutyLvSchema);

module.exports = ApprovedDutyLvModel;