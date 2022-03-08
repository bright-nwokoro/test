const client = require('../utils/twilio-config');

const newOTP = (res, req) => {
    phone_number = req.body.phonenumber
    const string = encodeURIComponent(phone_number);
    client.verifications
        .create({ to: phone_number, channel: "sms" })
        .then((verification) => console.log(verification.status));
    res.redirect(302, '/?verify_otp=' + string);
}

module.exports = { newOTP }