const mongoose = require("mongoose");
const express = require("express");
const helmet = require('helmet');
const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const homeRoute = require('./routes/home');
const bodyParser = require('body-parser')
require("dotenv").config();

const app = express();
const PORT = 5000;

// app.use(helmet());
app.use(bodyParser.json());

app.use('/signup', signupRoute);
app.use('/login', loginRoute)
app.use('/', homeRoute);

mongoose.connect(process.env.DB_URL).then(
    () => {
        console.log('DB successfully connected')
    }
);

app.listen(PORT, () => {
    console.log(`[localhost] started`)
    console.log(`[PORT] ${PORT}`)
    console.log(`Server running on http://localhost:${PORT}`)
})