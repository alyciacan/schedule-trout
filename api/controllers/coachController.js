const asyncHandler = require('express-async-handler')

const Coach = require('../models/coachModel')

//@desc Get coaches
//@route GET /api/coaches
//@access Private
const getCoaches = asyncHandler(async (req, res) => {
  const coaches = await Coach.find()

  res.status(200).json(coaches)
})

//@desc Set coaches
//@route POST /api/coaches
//@access Private
const setCoach = asyncHandler(async (req, res) => {
  if(!req.body.name) {
    res.status(400)
    throw new Error('Please add a name for this coach!')
  }
  const coach = await Coach.create({
    name: req.body.name
  })
  res.status(200).json(coach)
})

//@desc Update coaches
//@route PUT /api/coaches/:id
//@access Private
const updateCoach = asyncHandler(async (req, res) => {
  const updatedCoach = await Coach.findByIdAndUpdate(
    req.params.id,
    req.body, {
      new: true,
      runValidators: true
    }
  )

  if(!updatedCoach) {
    res.status(400)
    throw new Error('Coach not found!')
  }

  res.status(200).json(updatedCoach)
})

//@desc Delete coaches
//@route DELETE /api/goals
//@access Private
const deleteCoach = asyncHandler(async (req, res) => {
  const coachToDelete = await Coach.findByIdAndDelete(req.params.id)

  if(!coachToDelete) {
    res.status(400)
    throw new Error('Coach not found!')
  }
  res.status(200).json({ id: req.params.id })
})

module.exports = { 
  getCoaches,
  setCoach,
  updateCoach,
  deleteCoach
}