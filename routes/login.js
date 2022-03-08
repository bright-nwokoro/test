const expresss = require('express');

const loginController = require('../controllers/login');

const router = expresss.Router();

router.get("/login", (req, res) => {
    res.json({phoneNumber})
})

router.post("/login", loginController.acceptUser);

module.exports = router