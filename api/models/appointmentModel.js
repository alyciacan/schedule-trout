//define schema

const mongoose = require('mongoose')

const AppointmentSchema = mongoose.Schema({
  coachId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Coach',
    required: true,
  },
  availabilityWindowId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AvailabilityWindow',
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  studentName: {
    type: String,
    required: true
  }
}
)

module.exports = mongoose.model('Appointment', AppointmentSchema)