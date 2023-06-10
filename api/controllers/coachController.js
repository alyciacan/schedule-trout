const asyncHandler = require('express-async-handler')

//@desc Get coaches
//@route GET /api/goals
//@access Private
const getCoaches = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get coaches' })
})

//@desc Set coaches
//@route POST /api/goals
//@access Private
const setCoach = asyncHandler(async (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please add some coach information!')
  }
  res.status(200).json({ message: 'Set coach' })
})

//@desc Update coaches
//@route PUT /api/goals/:id
//@access Private
const updateCoach = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update coach ${ req.params.id }` })
})

//@desc Delete coaches
//@route DELETE /api/goals
//@access Private
const deleteCoach = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete coach ${ req.params.id }` })
})

module.exports = { 
  getCoaches,
  setCoach,
  updateCoach,
  deleteCoach
}