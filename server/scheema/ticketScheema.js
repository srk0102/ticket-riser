const mongoose = require('mongoose')
const { Schema } = mongoose;

const addTicketsSchema = new Schema({
  Title: { type: String, required: true },
  description: { type: String, required: true },
  file: { type: String },
  comments: { type: Array },
  assignedTo: { type: String },
  raisedBy: { type: String, required: true, unique: true },
  status: {type:Boolean, required: true}
});

const TICKET = mongoose.model('tickets', addTicketsSchema);

module.exports = TICKET;