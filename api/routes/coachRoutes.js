const express = require('express')
const router = express.Router()
const { getCoaches, setCoach, deleteCoach, updateCoach } = require('../controllers/coachController')

router.route('/').get(getCoaches).post(setCoach)

router.route('/:id').put(updateCoach).delete(deleteCoach)

module.exports = router