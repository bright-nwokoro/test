const expresss = require('express');

const signupController = require('../controllers/signup');

const router = expresss.Router();

// GET
router.get("/", (req, res) => {
    res.json({"user_inputs": ["phonenumber", "firstname", "lastname", "gender"]})
})

// POST
router.post("/", signupController.newUser);

module.exports = router
