const mongoose = require('mongoose');

const salaryRecordSchema = new mongoose.Schema({
  monthlySalary: Number,
  daysWorked: Number,
  dailySalary: Number,
  generatedSalary: Number,
});

const SalaryRecord = mongoose.model('SalaryRecord', salaryRecordSchema);

module.exports = SalaryRecord;
