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
  }
}
)

module.exports = mongoose.model('AvailabilityWindow', AvailabilityWindowSchema)