// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const employeeSchema = new Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   age: {
//     type: Number,
//     required: true,
//     min: 18,
//     max: 55
//   },
//   department: {
//     type: String,
//     required: true
//   },
//   workDays: {
//     type: Number,
//     required: true
//   },
//   dailyRate: {
//     type: Number,
//     required: true
//   },
//   loanInterests: {
//     type: Number,
//     default: 0
//   },
//   bonus: {
//     type: Number,
//     default: 0
//   },
//   totalSalary: {
//     type: Number,
//     required: true
//   }
// });

// const Employee = mongoose.model("Employee", employeeSchema);
// module.exports = Employee;

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 55,
  },
  department: {
    type: String,
    required: true,
  },
  workDays: {
    type: Number,
    required: true,
  },
  dailyRate: {
    type: Number,
    required: true,
  },
  loanInterests: {
    type: Number,
    default: 0,
  },
  bonus: {
    type: Number,
    default: 0,
  },
  courseName: {
    type: String,
    default: '',
  },
  courseFee: {
    type: Number,
    default: 0,
  },
  etfReduction: {
    type: Number,
    default: 0.12, // Default ETF reduction percentage (12%)
  },
  totalSalary: {
    type: Number,
    required: true,
  },
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;


