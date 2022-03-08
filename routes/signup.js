const expresss = require('express');

const signupController = require('../controllers/signup');

const router = expresss.Router();

router.get("/", (req, res) => {
    res.json({"user_inputs": ["phonenumber", "firstname", "lastname", "gender"]})
})

router.post("/", signupController.newUser);

module.exports = router

