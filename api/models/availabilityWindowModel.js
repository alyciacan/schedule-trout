//define schema

const mongoose = require('mongoose')

const AvailabilityWindowSchema = mongoose.Schema({
  coachId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Coach',
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
  appointmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Appointment',
    default: null
  }
}
)

module.exports = mongoose.model('AvailabilityWindow', AvailabilityWindowSchema)