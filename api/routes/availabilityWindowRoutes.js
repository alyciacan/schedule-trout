const express = require('express')
const router = express.Router()
const { getAvailabilityWindows, setAvailabilityWindow, deleteAvailabilityWindow, updateAvailabilityWindow } = require('../controllers/availabilityWindowController')

router.route('/').get(getAvailabilityWindows).post(setAvailabilityWindow)

router.route('/:id').put(updateAvailabilityWindow).delete(deleteAvailabilityWindow)

module.exports = router