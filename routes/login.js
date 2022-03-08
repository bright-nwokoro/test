const expresss = require('express');
const User = require('../models/user');

const router = expresss.Router();

router.get("/login", (req, res) => {
    res.json({phoneNumber})
})

router.post("/login", async(req, res) => {
    try {
        const phoneNumber = req.body;

        const user = await User.findOne({
            phoneNumber: phoneNumber
        }).lean();
    
        if (!user) {
            return res.status(400).json({
                status: "error",
                error: "Phonenumber does not exist",
            }).redirect("/signup");
        }
        res.status(201)
            .json({ status: "ok", data: "Login successfully" });

        res.redirect("/");
    } catch (error) {
        // if (error.code === 11000) {
        //     res.json({ status: "error", error: "One or more details already exist" });
        //     res.redirect("/login");
        // }
        throw error;
    }
});

module.exports = router