const mongoose = require('mongoose');

// Define the Doctor Schema
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  opening_slot_time: {
    type: String,
    required: true,
  },
  closing_slot_time: {
    type: String,
    required: true,
  },
  type_of_doctor: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  availability: [
    {
      start_time: {
        type: String,
        required: true,
      },
      end_time:{
        type: String,
        required: true,
      },          
      location: {
        type: String,
        required: true,
      }
    }
  ]
});

// Create and export the Doctor model
const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;


