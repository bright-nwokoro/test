const expresss = require('express');
const User = require('../models/user');

const router = expresss.Router();

router.get("/", (req, res) => {
    res.json({"user_inputs": ["phonenumber", "firstname", "lastname", "gender"]})
})

router.post("/", async(req, res) => {
    try {
        const user = await new User({
            phoneNumber: req.body.phonenumber,
            firstName: req.body.firstname,
            lastName: req.body.lastname,
            gender: req.body.gender,
        });
        user.save();
        res.status(201)
            .json({ status: "ok", data: "Account created successfully" });

        res.redirect("/login");
    } catch (error) {
        if (error.code === 11000) {
            res.json({ status: "error", error: "One or more details already exist" });
            res.redirect("/login");
        }
        throw error;
    }
});

module.exports = router

