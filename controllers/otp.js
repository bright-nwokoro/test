import client from "../utils/twillio_config.js";

const newOTP = (res, req) => {
    client.verifications
        .create({ to: req.body.phonenumber, channel: "sms" })
        .then((verification) => console.log(verification.status));
    res.redirect(302, '/welcome')
}

module.exports = { newOTP }