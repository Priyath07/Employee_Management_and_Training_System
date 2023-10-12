const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ApprovedMedicalSchema = new Schema({
    employeeName: String,
    employeeId:String,
    description:String,
    LeaveRequestType:String
})

const ApprovedMedicalLvModel = mongoose.model("approvedmedicLv",ApprovedMedicalSchema);

module.exports = ApprovedMedicalLvModel;