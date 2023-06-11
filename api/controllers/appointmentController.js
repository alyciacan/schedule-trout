const asyncHandler = require('express-async-handler')

const Appointment = require('../models/appointmentModel')

//@desc Get appointments
//@route GET /api/appointments
//@access Private
const getAppointments = asyncHandler(async (req, res) => {
  const appointments = await Appointment.find()

  res.status(200).json(appointments)
})

//@desc Set appt
//@route POST /api/appointments
//@access Private
const setAppointment = asyncHandler(async (req, res) => {
  if(!req.body.coachId || !req.body.studentName) {
    res.status(400)
    throw new Error('Must have an associated coach and student!')
  }
  if(!req.body.availabilityWindowId) {
    res.status(400)
    throw new Error('Must have an associated Appointment Window!')
  }
  if(!req.body.startTime || !req.body.endTime) {
    res.status(400)
    throw new Error('Must have a start and end time!')
  }
  const appointment = await Appointment.create({
    coachId: req.body.coachId,
    availabilityWindowId: req.body.availabilityWindowId,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    studentName: req.body.studentName
  })
  res.status(200).json(appointment)
})

//@desc Update appts
//@route PUT /api/appointments/:id
//@access Private
const updateAppointment = asyncHandler(async (req, res) => {
  const updatedAppointment = await Appointment.findByIdAndUpdate(
    req.params.id,
    req.body, {
      new: true,
      runValidators: true
    }
  )

  if(!updatedAppointment) {
    res.status(400)
    throw new Error('Appointment not found!')
  }

  res.status(200).json(updatedAppointment)
})

//@desc Delete appt
//@route DELETE /api/appointments/:id
//@access Private
const deleteAppointment = asyncHandler(async (req, res) => {
  const appointmentToDelete = await Appointment.findByIdAndDelete(req.params.id)

  if(!appointmentToDelete) {
    res.status(400)
    throw new Error('Appointment not found!')
  }
  res.status(200).json({ id: req.params.id })
})

module.exports = { 
  getAppointments,
  setAppointment,
  updateAppointment,
  deleteAppointment
}