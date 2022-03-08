const expresss = require('express');

const loginController = require('../controllers/login');

const router = expresss.Router();

// GET
router.get("/login", (req, res) => {
    res.json({phoneNumber})
})

// POST
router.post("/login", loginController.acceptUser);

module.exports = router