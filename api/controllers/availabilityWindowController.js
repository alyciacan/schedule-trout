const asyncHandler = require('express-async-handler')

const AvailabilityWindow = require('../models/availabilityWindowModel')

//@desc Get availability windows
//@route GET /api/availabilitywindows
//@access Private
const getAvailabilityWindows = asyncHandler(async (req, res) => {
  const availabilityWindows = await AvailabilityWindow.find()

  res.status(200).json(availabilityWindows)
})

//@desc Set AWs
//@route POST /api/availabilitywindows
//@access Private
const setAvailabilityWindow = asyncHandler(async (req, res) => {
  if(!req.body.coachId) {
    res.status(400)
    throw new Error('Must have an associated coach and student.')
  }
  if(!req.body.startTime || !req.body.endTime) {
    res.status(400)
    throw new Error('Must have a start and end time!')
  }
  const availabilityWindow = await AvailabilityWindow.create({
    coachId: req.body.coachId,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    studentName: req.body.studentName
  })
  res.status(200).json(availabilityWindow)
})

//@desc Update AWs
//@route PUT /api/availabilityWindow/:id
//@access Private
const updateAvailabilityWindow = asyncHandler(async (req, res) => {
  const updatedAvailabilityWindow = await AvailabilityWindow.findByIdAndUpdate(
    req.params.id,
    req.body, {
      new: true,
      runValidators: true
    }
  )

  if(!updatedAvailabilityWindow) {
    res.status(400)
    throw new Error('Availability window not found!')
  }

  res.status(200).json(updatedAvailabilityWindow)
})

//@desc Delete AW
//@route DELETE /api/availabilitywindow/:id
//@access Private
const deleteAvailabilityWindow = asyncHandler(async (req, res) => {
  const windowToDelete = await AvailabilityWindow.findByIdAndDelete(req.params.id)

  if(!windowToDelete) {
    res.status(400)
    throw new Error('Availability window not found!')
  }
  res.status(200).json({ id: req.params.id })
})

module.exports = { 
  getAvailabilityWindows,
  setAvailabilityWindow,
  updateAvailabilityWindow,
  deleteAvailabilityWindow
}