const mongoose = require("mongoose");

const db = mongoose;
const Schema = db.Schema

const userSchema = new Schema({
    userId: {
        type: String,
    },
    phoneNumber: {
        type: Number,
        required: true,
        maxLength: 11,
        unique: [true, 'That Phone number is taken.']
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    gender: {
        type: String,
    }
})

const User = db.model('User', userSchema);

module.exports = User