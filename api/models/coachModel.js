//define schema

const mongoose = require('mongoose')

const coachSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: [true, 'Please add a name for this coach!'],
  }
}, {
  timestamps: true
}
)

module.exports = mongoose.model('Coach', coachSchema)