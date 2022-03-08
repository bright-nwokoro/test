const dotenv = require('dotenv').config;
const twilio = require('twilio')

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceId = process.env.TWILIO_SERVICE_ID
const client = twilio(accountSid, authToken);

const twilioClient = client.verify.services(serviceId)
export default twilioClient;