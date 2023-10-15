// models/person.js
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  nationalId: String,
  name: String,
  age: Number,
  dateOfBirth: Date,
  jobExperience: Number,
  email: String,
  phoneNumber: String,
  address: String,
  gender: String,
  education: String,
  profession: String,
  userType: String,
  skills: String,
  itNumber: String

});

//personSchema.index({name:'text'});
module.exports = mongoose.model('Person', personSchema);
