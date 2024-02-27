const express = require('express');
const { register, login } = require('../controllers/auth');
require('express-async-errors')

const router = express.Router();

router.post('/register', register)
router.post('/login', login)

module.exports = router