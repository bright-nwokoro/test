const express = require('express');

const auth = require("../middleware/auth");
// const { modelName } = require('../models/user');

const router = express.Router();

router.post("/", auth, (req, res) => {
  res.status(200).send("Hello, there and Welcome");
});

module.exports = router;