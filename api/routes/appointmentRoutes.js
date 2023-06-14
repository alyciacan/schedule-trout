const express = require('express')
const router = express.Router()
const { getAppointments, setAppointment, deleteAppointment, updateAppointment, getAppointmentsByUser } = require('../controllers/appointmentController')

router.route('/').get(getAppointments).post(setAppointment)

router.route('/:id').put(updateAppointment).delete(deleteAppointment).get(getAppointmentsByUser)

module.exports = router