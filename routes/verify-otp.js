const expresss = require('express');
require("dotenv").config();

const verifyotpController = require('../controllers/verify-otp');

const router = expresss.Router();

// GET
router.get('/', (req, res) => {
    res.send('Enter OTP Code')
})

// POST
router.post('/', verifyotpController.verifyOTP)

module.exports = router