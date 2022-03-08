const expresss = require('express');

const otpController = require('../controllers/otp');

const router = expresss.Router();

// GET
router.get("/", (req, res) => {
    res.send('Enter phone number')
})

// POST
router.post("/", otpController.newOTP);

module.exports = router