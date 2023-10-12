const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  selectedSubject: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: String 
  },
  time: {
    type: String
  },
  feedbackType: {
    type: String 
  }
});

const Feedback = mongoose.model("feedback", feedbackSchema);

module.exports = Feedback;
