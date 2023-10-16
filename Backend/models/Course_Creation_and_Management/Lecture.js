const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
  title: String,
  lecturer: String,
  description: String,
  // Add more fields as needed
});

const Lecture = mongoose.model('Lecture', lectureSchema);

module.exports = Lecture;
