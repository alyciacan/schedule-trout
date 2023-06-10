//define schema

const mongoose = require('mongoose')

const coachSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name for this coach!'],
  }
}, {
  timestamps: true
}
)

module.exports = mongoose.model('Coach', coachSchema)