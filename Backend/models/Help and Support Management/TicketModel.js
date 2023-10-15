const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ticketSchema = new Schema({
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
    type: String,
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date, // Date field
    default: Date.now
  },
  time: {
    type: String // Time field (you can use a specific format, e.g., "HH:mm")
  },
  email: {
    type: String, // Email field
  }
})

ticketSchema.index({ id: 'text' });
const Ticket = mongoose.model("ticket", ticketSchema)

module.exports = Ticket
