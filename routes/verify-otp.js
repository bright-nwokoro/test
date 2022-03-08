const expresss = require('express');

const otpController = require('../controllers/otp');

const router = expresss.Router();

router.post("/verify-otp", otpController.newOTP);