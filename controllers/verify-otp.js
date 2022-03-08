const client = require('../utils/twilio-config');
require("dotenv").config();

const verifyOTP = (req, res) => {
      const code = req.body.otp
      const phoneNumber = req.query.verifyotp
      client.verify.services(process.env.TWILIO_SERVICE_ID)
      .verificationChecks
      .create({to: phoneNumber, code: code})
      .then(verification_check => {
            if(verification_check.status == 'approved') {
                  res.redirect(302, '/welcome')
            }
      });

}

module.exports = { verifyOTP }