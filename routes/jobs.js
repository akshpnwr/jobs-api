const express = require('express')
const { getAllJobs, createJob, getJob, deleteJob, updateJob } = require('../controllers/jobs')
const authMiddleware = require('../middleware/authentication')
require('express-async-errors')

const router = express.Router()

// Apply authentication middleware to all routes
router.use(authMiddleware)

router.route('/').get(getAllJobs).post(createJob)
router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob)

module.exports = router